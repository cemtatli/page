<script lang="ts">
  import { bookmarks } from '$lib/data/bookmarks';
  import BookmarkCard from '$lib/components/BookmarkCard.svelte';
  import { House, Briefcase, Bookmark } from 'lucide-svelte';
  
  const name = 'Cem';
  const title = 'Frontend Developer';
  const description = 'Web teknolojileri konusunda tutkulu, kullanıcı deneyimini önemseyen bir geliştirici.';

  const navItems = [
    { href: '/', icon: House, label: 'Ana Sayfa' },
    { href: '/work', icon: Briefcase, label: 'İş Deneyimlerim' },
    { href: '#bookmarks', icon: Bookmark, label: 'Yer İmlerim' }
  ];
</script>

<svelte:head>
  <title>{name} - {title}</title>
  <meta name="description" content="Kişisel portföy sitesi - {name}, {title}" />
</svelte:head>

<main class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
  <nav class="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
    <div class="bg-white/80 backdrop-blur-lg rounded-full px-6 py-3 shadow-lg border border-slate-100">
      <ul class="flex items-center gap-8">
        {#each navItems as item}
          <li>
            <a
              href={item.href}
              class="flex flex-col items-center gap-1 text-gray-600 hover:text-indigo-500 transition-colors"
              aria-label={item.label}
            >
              <svelte:component this={item.icon} class="w-5 h-5" />
              <span class="text-xs font-medium">{item.label}</span>
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </nav>

  <div class="container mx-auto px-4 py-16">
    <section class="max-w-3xl mx-auto text-center space-y-6">
      <h1 class="text-5xl font-bold text-gray-800 animate-fade-in">
        Merhaba, Ben {name}
      </h1>
      
      <p class="text-xl text-gray-600 leading-relaxed">
        {description}
      </p>
    </section>

    <section id="bookmarks" class="max-w-4xl mx-auto mt-24">
      <div class="flex items-center justify-center gap-2 mb-12">
        <Bookmark class="w-8 h-8 text-indigo-500" />
        <h2 class="text-3xl font-bold text-gray-800 text-center">Yer İmlerim</h2>
      </div>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {#each bookmarks as bookmark (bookmark.id)}
          <BookmarkCard {bookmark} />
        {/each}
      </div>
    </section>
  </div>
</main>

<style>
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-fade-in {
    animation: fade-in 0.6s ease-out forwards;
  }
</style>
