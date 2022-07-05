<script>
    import "../app.css"
    import Nav from "../lib/nav/Nav.svelte"
</script>

<div class="min-h-full"> 
    <Nav/>
    <div class="py-5">
      <main>
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-8 sm:px-0">
            <div><slot/></div>
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>
  </div>