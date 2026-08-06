<script setup>
/**
 * DreamHiveLayout — wraps the Default VitePress layout and layers on two
 * enhancements that DefaultTheme alone cannot deliver:
 *
 *  1. A purpose-built site footer injected via the `layout-bottom` slot. The
 *     stock VitePress VPFooter is hidden on every sidebar page
 *     (`.VPFooter.has-sidebar { display: none }`), so the default config
 *     footer never surfaces on doctrine/course/modules/etc. This footer
 *     renders on EVERY page — home, docs, 404, and the download library.
 *
 *  2. The theme footer config that ships with DefaultTheme is intentionally
 *     disabled here (`footer: false` is NOT set; instead we inject our own
 *     component). We keep it self-contained and static-HTML-safe.
 */
import DefaultTheme from 'vitepress/theme'
import { h, provide, inject, ref, onMounted, onBeforeUnmount } from 'vue'
import { useData } from 'vitepress'

const { theme } = useData()

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <footer class="dh-footer" aria-label="Site footer">
        <div class="dh-footer-inner">
          <div class="dh-footer-brand">
            <div class="dh-footer-logo">Dream Hive</div>
            <p class="dh-footer-tagline">
              The Dream Pursuit Doctrine — a concept-first, college-ready curriculum
              for winning federal business.
            </p>
            <p class="dh-footer-version">Doctrine v{{ theme.doctrineVersion }}</p>
          </div>

          <nav class="dh-footer-nav" aria-label="Footer navigation">
            <div class="dh-footer-col">
              <h4>Doctrine</h4>
              <a href="/doctrine/">Ten concepts</a>
            </div>
            <div class="dh-footer-col">
              <h4>Modules</h4>
              <a href="/modules/">Teaching plans</a>
            </div>
            <div class="dh-footer-col">
              <h4>Course</h4>
              <a href="/course/">Degree ladder</a>
            </div>
            <div class="dh-footer-col">
              <h4>Literacy</h4>
              <a href="/literacy/">Reference</a>
            </div>
            <div class="dh-footer-col">
              <h4>Library</h4>
              <a href="/library/">Downloads</a>
            </div>
            <div class="dh-footer-col">
              <h4>Case Study</h4>
              <a href="/case-study/">Ravonics</a>
            </div>
          </nav>
        </div>

        <div class="dh-footer-legal">
          <p>
            Educational material only. Not legal, financial, or offer advice; not affiliated
            with SAM.gov, GSA, or any government agency.
          </p>
          <p class="dh-footer-copy">© 2026 Dream Hive · DreamLimited</p>
        </div>
      </footer>
    </template>
  </Layout>
</template>

<style scoped>
/* Purpose-built footer — renders on every page (the stock VPFooter is hidden
   on sidebar pages, so we inject our own via layout-bottom). */
.dh-footer {
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-alt);
  padding: 48px 24px 32px;
}

.dh-footer-inner {
  max-width: var(--vp-layout-max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.4fr repeat(6, minmax(0, 1fr));
  gap: 24px;
}

.dh-footer-brand .dh-footer-logo {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.02em;
  background: linear-gradient(120deg, #6d3fc8 30%, #a78bfa);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.dh-footer-tagline {
  font-size: 14px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  margin: 12px 0 8px;
  max-width: 320px;
}

.dh-footer-version {
  font-size: 13px;
  color: var(--vp-c-text-2);
  opacity: 0.8;
}

.dh-footer-nav {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  grid-column: 2 / -1;
}

.dh-footer-col h4 {
  margin: 0 0 10px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--vp-c-text-1);
}

.dh-footer-col a {
  font-size: 14px;
  line-height: 1.9;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.25s;
}

.dh-footer-col a:hover {
  color: var(--vp-c-brand-1);
}

.dh-footer-legal {
  max-width: var(--vp-layout-max-width);
  margin: 32px auto 0;
  padding-top: 20px;
  border-top: 1px solid var(--vp-c-divider);
}

.dh-footer-legal p {
  font-size: 12.5px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  margin: 0 0 6px;
  max-width: 720px;
}

.dh-footer-legal .dh-footer-copy {
  margin-top: 8px;
  opacity: 0.75;
}

@media (max-width: 960px) {
  .dh-footer-inner {
    grid-template-columns: 1fr;
  }
  .dh-footer-nav {
    grid-column: 1;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>