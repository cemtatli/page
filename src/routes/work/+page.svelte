<script lang="ts">
  import { works } from '$lib/data/works';
  import { Briefcase, ArrowRight, Building } from 'lucide-svelte';
</script>

<svelte:head>
  <title>İş Deneyimlerim</title>
  <meta name="description" content="Profesyonel iş deneyimlerim ve projelerim" />
</svelte:head>

<main class="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-center gap-2 mb-12">
      <Briefcase class="w-8 h-8 text-indigo-500" />
      <h1 class="text-4xl font-bold text-gray-800 text-center">
        İş Deneyimlerim
      </h1>
    </div>

    <div class="max-w-4xl mx-auto space-y-16">
      {#each works as work (work.id)}
        <article 
          class="group relative bg-white rounded-2xl p-8 transition-all hover:shadow-[0_0_50px_rgba(0,0,0,0.05)] border border-slate-100"
          aria-labelledby="work-title-{work.id}"
        >
          <div class="flex flex-col lg:flex-row gap-8">
            {#if work.image}
              <div class="lg:w-2/5">
                <div class="aspect-video overflow-hidden rounded-xl">
                  <img 
                    src={work.image} 
                    alt="{work.company} - {work.title}" 
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            {/if}
            
            <div class="flex-1 space-y-4">
              <div class="flex items-center gap-2 text-indigo-500">
                <Building  class="w-5 h-5" />
                <span class="text-sm font-medium">{work.company}</span>
              </div>

              <div>
                <h2 id="work-title-{work.id}" 
                  class="text-2xl font-bold text-gray-800 mb-1">
                  {work.title}
                </h2>
                <p class="text-sm text-gray-500">{work.period}</p>
              </div>
              
              <p class="text-gray-600 text-base leading-relaxed">{work.description}</p>
              
              <div class="flex flex-wrap gap-2">
                {#each work.technologies as tech}
                  <span class="px-4 py-1.5 bg-slate-50 text-slate-600 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                {/each}
              </div>

              {#if work.link}
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-indigo-500 hover:text-indigo-600 transition-colors mt-4 group/link"
                  aria-label="Projeyi görüntüle: {work.title}"
                >
                  <span class="font-medium">Projeyi Görüntüle</span>
                  <ArrowRight class="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              {/if}
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</main> 