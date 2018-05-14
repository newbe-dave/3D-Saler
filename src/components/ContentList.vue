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
    <Card :style="{padding: '0 24px', minHeight: '900px', background: '#fff', maxWidth: '960px'}">

    </Card>
  </Layout>
</template>

<script>
  import FilterRow from './CgFilter'

  export default {
    name: "ContentList",
    components: {
      FilterRow
    }
  }
</script>

<style scoped>

</style>
