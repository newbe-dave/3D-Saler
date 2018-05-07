<template>
  <Layout :style="{'text-align': 'left', maxWidth: '960px', width: '960px'}">
    <Breadcrumb :style="{margin: '88px 0 20px 20px', maxWidth: '960px'}">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Components</BreadcrumbItem>
      <BreadcrumbItem>Layout</BreadcrumbItem>
    </Breadcrumb>
    <Card :style="{padding: '0 24px', minHeight: '900px', background: '#fff', maxWidth: '960px'}">
      content
    </Card>
  </Layout>
</template>

<script>
    export default {
        name: "ContentList"
    }
</script>

<style scoped>

</style>
