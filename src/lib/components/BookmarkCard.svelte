<script lang="ts">
  import type { Bookmark } from '$lib/types/bookmark';
  
  export let bookmark: Bookmark;
</script>

<a href={bookmark.url} 
  target="_blank" 
  rel="noopener noreferrer" 
  class="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
  <div class="flex items-start space-x-4">
    <span class="text-2xl">{bookmark.icon}</span>
    <div class="flex-1">
      <h3 class="text-lg font-semibold text-gray-800 mb-2">
        {bookmark.title}
      </h3>
      <p class="text-gray-600 text-sm">
        {bookmark.description}
      </p>
      <span class="inline-block mt-3 text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md font-semibold">
        {bookmark.type}
      </span>
    </div>
  </div>
</a> 