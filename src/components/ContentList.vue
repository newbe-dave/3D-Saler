<template>
  <Layout :style="{'text-align': 'left', maxWidth: '960px', width: '960px'}">
    <Layout>
      <Breadcrumb :style="{margin: '88px 0 20px 20px', maxWidth: '960px'}">
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Components</BreadcrumbItem>
        <BreadcrumbItem>Layout</BreadcrumbItem>
      </Breadcrumb>
    </Layout>
    <Layout>
      <FilterRow/>
    </Layout>
    <Card :style="{padding: '0', minHeight: '900px', background: '#fff', maxWidth: '960px'}">
      <DisplayCard/>
    </Card>
  </Layout>
</template>

<script>
  import FilterRow from './CgFilter'
  import DisplayCard from './ResourceDisplayContainer'

  export default {
    name: "ContentList",
    components: {
      FilterRow,
      DisplayCard
    }
  }
</script>

<style scoped>

</style>
