<script lang="ts">
  import { House, CircleAlert } from 'lucide-svelte';
</script>

<main class="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white p-4">
  <div class="text-center space-y-6">
    <div class="flex justify-center">
      <CircleAlert class="w-24 h-24 text-amber-500" />
    </div>
    
    <h1 class="text-6xl font-bold text-gray-800">404</h1>
    <p class="text-xl text-gray-600">Aradığınız sayfa bulunamadı.</p>
    
    <a 
      href="/" 
      class="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-colors"
    >
      <House  class="w-5 h-5" />
      <span>Ana Sayfaya Dön</span>
    </a>
  </div>
</main> 