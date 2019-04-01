<template>
<div>
  <h3 class="location">数据查询</h3>
  <Row :gutter="32" :class-name="'filter-search'">
    <Col span="24" class="tab-wrap">
      <Tabs type="card" :animated="false">
        <TabPane label="普通文本">
          <Col>
            <Form label-position="left" label-width="60" inline>
              <FormItem label="业务名称">
                  <Input></Input>
              </FormItem>
              <FormItem label="回调状态">
                  <Input></Input>
              </FormItem>
              <FormItem label="时间范围">
                  <Input></Input>
              </FormItem>
              <FormItem label="数据状态">
                  <Input></Input>
              </FormItem>
              <FormItem label="命中原因">
                  <Input></Input>
              </FormItem>
            </Form>
          </Col>
        </TabPane>
        <TabPane label="用户资料文本">用户资料文本的内容</TabPane>
        <TabPane label="普通图片">普通图片的内容</TabPane>
        <TabPane label="用户资料图片">标签三的内容</TabPane>
      </Tabs>
    </Col>
  </Row>
  <Row>
    <Table :loading="loading" border :columns="columns" :data="data" ref="table" sortable="custom" @on-sort-change="changeSort" @on-selection-change="changeSelect"></Table>
  </Row>
  <Row type="flex" justify="end" class="page">
    <Page :current="pageNumber" :total="total" :page-size="pageSize" @on-change="changePage" @on-page-size-change="changePageSize" :page-size-opts="[10,20,50]" size="small" show-total show-elevator show-sizer></Page>
  </Row>
</div>
</template>

<script>
import { getRuleList } from '@/api/data'
export default {
  name: 'count_to_page',
  components: {
  },
  data () {
    return {
      loading: true,
      selectList: [],
      selectCount: 0,
      selectDate: null,
      title: '',
      sortColumn: 'create_time',
      sortType: 'desc',
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '标题',
          key: 'title',
          width: 180,
          align: 'center'
        },
        {
          title: '状态',
          key: 'status',
          width: 80,
          align: 'center',
          render: (h, params) => {
            // 0：新建，1：生效，2，停止
            let status = params.row.status
            let sHtml = ''
            if (status === 0) {
              sHtml = '新建'
            } else if (status === 1) {
              sHtml = '生效'
            } else if (status === 2) {
              sHtml = '停止'
            }
            return h('span', {}, sHtml)
          }
        },
        {
          title: '最近命中',
          key: 'last_hit',
          align: 'center'
        },
        {
          title: '最近触发',
          key: 'last_check',
          align: 'center'
        },
        {
          title: '创建时间',
          key: 'create_time',
          align: 'center',
          sortable: true,
          sortType: 'desc'
        },
        {
          title: '操作',
          key: 'action',
          width: 160,
          align: 'center',
          // fixed: 'right',
          render: (h, params) => {
            return h('div', [
              h(
                'Button', {
                  props: {
                    type: 'primary',
                    size: 'small',
                    icon: 'ios-create-outline'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      util.openNewPage(this, 'rule-edit')
                      this.$router.push({
                        name: 'rule-edit',
                        params: {
                          id: params.row.id
                        }
                      })
                    }
                  }
                },
                '编辑'
              ),
              h(
                'Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.row)
                    }
                  }
                },
                '删除'
              )
            ])
          }
        }
      ],
      data: [],
      pageNumber: 1,
      pageSize: 10,
      total: 0,
      startDate: '',
      endDate: ''
    }
  },
  methods: {
    init () {
      this.getRuleList()
    },
    changePage (v) {
      this.pageNumber = v
      this.getRuleList()
      this.clearSelectAll()
    },
    changePageSize (v) {
      this.pageSize = v
      this.getRuleList()
    },
    selectDateRange (v) {
      if (v) {
        this.startDate = v[0]
        this.endDate = v[1]
      }
    },
    getRuleList () {
      this.loading = true
      let params = ''
      // 后端可配置使用数据库或Elasticsearch搜索 这里分开了2个请求
      if (this.title === '') {
        params = {
          pageNumber: this.pageNumber,
          pageSize: this.pageSize,
          sort: this.sortColumn,
          order: this.sortType
        }
        getRuleList(params).then(res => {
          this.loading = false
          res = res.data
          if (res.code === 0) {
            this.data = res.data.rules
            this.total = res.data.total
          }
        })
      } else {
        params = {
          title: this.title,
          pageNumber: this.pageNumber,
          pageSize: this.pageSize,
          sort: this.sortColumn,
          order: this.sortType
          // startDate: this.startDate,
          // endDate: this.endDate
        }
        getRuleList(params).then(res => {
          this.loading = false
          if (res.code === 0) {
            this.data = res.data
            this.total = res.result.totalElements
          }
        })
      }
    },
    handleReset () {
      this.title = ''
      this.selectDate = null
      this.startDate = ''
      this.endDate = ''
      this.getRuleList()
    },
    remove (v) {
      this.$Modal.confirm({
        title: '确认删除',
        content: '您确认要删除该条数据?',
        onOk: () => {
        }
      })
    },
    clearSelectAll () {
      this.$refs.table.selectAll(false)
    },
    changeSelect (e) {
      this.selectList = e
      this.selectCount = e.length
    },
    changeSort (e) {
      this.sortColumn = e.key
      this.sortType = e.order
      if (e.order === 'normal') {
        this.sortType = ''
      }
      this.getRuleList()
    },
    delAll () {
      if (this.selectCount <= 0) {
        this.$Message.warning('您还未选择要删除的数据')
        return
      }
      this.$Modal.confirm({
        title: '确认删除',
        content: '您确认要删除所选的 ' + this.selectCount + ' 条数据?',
        onOk: () => {
          let ids = ''
          this.selectList.forEach(function (e) {
            ids += e.id + ','
          })
          ids = ids.substring(0, ids.length - 1)
          deleteLog(ids).then(res => {
            if (res.success === true) {
              this.$Message.success('删除成功')
              this.clearSelectAll()
              this.init()
            }
          })
        }
      })
    },
    clearAll () {
      this.$Modal.confirm({
        title: '请谨慎进行此操作！',
        content: '您确认要彻底清空删除所有数据?',
        onOk: () => {
          this.loading = true
        }
      })
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="less">
@baseColor: ~"#dc9387";

</style>
