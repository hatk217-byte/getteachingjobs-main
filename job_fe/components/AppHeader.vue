<template>
  <header
    v-if="!headerStore.hideHeader"
    class="app-header site-header"
    :class="{
      'app-header--home': isHomePage,
      'app-header--teacher': isTeacherSupport,
      'app-header--scrolled': isScrolled,
    }"
  >
    <div class="topbar app-header__container">
      <div class="topbar-inner app-header__inner">
        <NuxtLink to="/" class="wordmark" aria-label="Home" @click="closeMobileNav">
          <span class="wordmark-main">GetTeachingJobs</span>
          <span class="wordmark-dot">.vn</span>
        </NuxtLink>

        <button
          type="button"
          class="mobile-toggle"
          data-mobile-toggle
          :aria-expanded="isMobileNavOpen"
          aria-controls="site-mobile-menu"
          aria-label="Menu"
          @click="toggleMobileNav"
        >
          <span aria-hidden="true">{{ isMobileNavOpen ? '✕' : '☰' }}</span>
        </button>

        <nav
          id="site-primary-nav"
          class="site-nav site-nav--desktop"
          aria-label="Primary"
        >
          <template v-for="item in menuItems" :key="item.to">
            <!-- Services / Teacher Support Dropdown -->
            <div
              v-if="item.hasDropdown"
              class="site-nav__dropdown-wrapper"
              @mouseenter="openServicesDropdown"
              @mouseleave="scheduleCloseServicesDropdown"
            >
              <button
                type="button"
                class="site-nav__link site-nav__dropdown-trigger"
                :class="{
                  'is-active': isServicesActive,
                  'is-open': isServicesDropdownOpen,
                }"
                aria-haspopup="true"
                :aria-expanded="isServicesDropdownOpen"
                @click="onServicesTriggerClick(item)"
              >
                <span>{{ item.label }}</span>
                <UIcon
                  name="i-lucide-chevron-down"
                  class="site-nav__chevron"
                  :class="{ 'is-rotated': isServicesDropdownOpen }"
                />
              </button>

              <Transition name="dropdown-fade">
                <div
                  v-show="isServicesDropdownOpen"
                  class="site-nav__dropdown-menu"
                  role="menu"
                  @mouseenter="cancelCloseServicesDropdown"
                  @mouseleave="scheduleCloseServicesDropdown"
                >
                  <div class="site-nav__dropdown-list">
                    <NuxtLink
                      v-for="svc in teacherServicesList"
                      :key="svc.slug"
                      :to="svc.to"
                      class="site-nav__dropdown-item"
                      :class="{
                        'is-item-active': router.currentRoute.value.path === svc.to,
                        'is-featured': svc.featured,
                      }"
                      @click="closeServicesDropdown"
                    >
                      <span class="site-nav__dropdown-num">{{ svc.num }}</span>
                      <span class="site-nav__dropdown-item-title">{{ svc.title }}</span>
                      <span v-if="svc.badge" class="site-nav__dropdown-badge">{{ svc.badge }}</span>
                    </NuxtLink>
                  </div>
                </div>
              </Transition>
            </div>

            <!-- Standard Link -->
            <NuxtLink
              v-else
              :to="item.to"
              :class="{
                'is-active': isActive(item),
                'is-highlight': item.highlight,
              }"
            >
              <span v-if="item.highlight" class="highlight-dot" aria-hidden="true" />
              {{ item.label }}
            </NuxtLink>
          </template>
        </nav>

        <div
          id="site-mobile-menu"
          class="site-mobile-menu"
          :class="{ 'is-open': isMobileNavOpen }"
          data-mobile-nav
        >
          <nav class="site-mobile-menu__nav" aria-label="Primary">
            <template v-for="item in menuItems" :key="`mobile-${item.to}`">
              <!-- Mobile Services Dropdown -->
              <div v-if="item.hasDropdown" class="site-mobile-menu__dropdown-wrapper">
                <button
                  type="button"
                  class="site-mobile-menu__dropdown-trigger"
                  :class="{ 'is-active': isServicesActive, 'is-open': isMobileServicesOpen }"
                  @click="isMobileServicesOpen = !isMobileServicesOpen"
                >
                  <span>{{ item.label }}</span>
                  <UIcon
                    name="i-lucide-chevron-down"
                    class="size-4 transition-transform duration-200"
                    :class="{ 'rotate-180': isMobileServicesOpen }"
                  />
                </button>
                <div v-show="isMobileServicesOpen" class="site-mobile-menu__subnav">
                  <NuxtLink
                    v-for="svc in teacherServicesList"
                    :key="`m-${svc.slug}`"
                    :to="svc.to"
                    class="site-mobile-menu__sublink"
                    :class="{
                      'is-active': router.currentRoute.value.path === svc.to,
                      'is-featured': svc.featured,
                    }"
                    @click="closeMobileNav"
                  >
                    <span class="site-mobile-menu__subnum">{{ svc.num }}</span>
                    <span>{{ svc.title }}</span>
                    <span v-if="svc.badge" class="site-mobile-menu__subbadge">{{ svc.badge }}</span>
                  </NuxtLink>
                </div>
              </div>

              <!-- Standard Mobile Link -->
              <NuxtLink
                v-else
                :to="item.to"
                :class="{
                  'is-active': isActive(item),
                  'is-highlight': item.highlight,
                }"
                @click="closeMobileNav"
              >
                <span v-if="item.highlight" class="highlight-dot" aria-hidden="true" />
                {{ item.label }}
              </NuxtLink>
            </template>
          </nav>

          <div class="site-mobile-menu__actions">
            <template v-if="authStore.isLoggedIn">
              <p class="site-mobile-menu__user">
                {{ authStore.user?.fullName || authStore.user?.email || 'User' }}
              </p>
              <button
                type="button"
                class="site-mobile-menu__action"
                @click="goAccountFromMobile"
              >
                <UIcon name="i-lucide-user" class="size-4 shrink-0" />
                Account Settings
              </button>
              <button
                type="button"
                class="site-mobile-menu__action site-mobile-menu__action--danger"
                @click="logoutFromMobile"
              >
                <UIcon name="i-lucide-log-out" class="size-4 shrink-0" />
                Sign Out
              </button>
            </template>
            <template v-else>
              <button
                type="button"
                class="site-mobile-menu__action site-mobile-menu__action--auth"
                data-auth-open
                data-auth-view-target="login"
                @click="openAuthFromMobile('login')"
              >
                Login
              </button>
              <NuxtLink
                v-if="isTeacherSupport"
                to="/teacher-support/your-situation"
                class="site-mobile-menu__action site-mobile-menu__action--post"
                @click="closeMobileNav"
              >
                Check Your Case
              </NuxtLink>
              <button
                v-else-if="showPostButton"
                type="button"
                class="site-mobile-menu__action site-mobile-menu__action--post"
                @click="handlePostJobFree"
              >
                Post a Free Job
              </button>
            </template>
          </div>
        </div>

        <div class="topbar-actions topbar-actions--desktop app-header__cluster app-header__cluster--end">
          <template v-if="authStore.isLoggedIn">
            <UDropdownMenu
              :items="userDropdownItems"
              :content="{ align: 'end', side: 'bottom', sideOffset: 8 }"
              :ui="{ content: 'z-[70] w-56' }"
            >
              <button type="button" class="primary-btn small-btn topbar-actions__user">
                <span class="topbar-actions__userLabel">
                  {{ authStore.user?.fullName || authStore.user?.email || 'User' }}
                </span>
                <UIcon name="i-lucide-chevron-down" class="size-4 shrink-0" />
              </button>
            </UDropdownMenu>
          </template>
          <template v-else>
            <button
              type="button"
              class="topbar-actions__auth small-btn"
              data-auth-open
              data-auth-view-target="login"
              @click="openAuthModal('login')"
            >
              Login
            </button>
          </template>

          <NuxtLink
            v-if="isTeacherSupport"
            to="/teacher-support/your-situation"
            class="topbar-actions__post small-btn"
          >
            Check Your Case
          </NuxtLink>
          <button
            v-else-if="showPostButton"
            type="button"
            class="topbar-actions__post small-btn"
            @click="handlePostJobFree"
          >
            Post a Free Job
          </button>
        </div>
      </div>
    </div>

    <AuthModal
      v-if="!authStore.isLoggedIn"
      v-model="authModalOpen"
      :initial-view="authModalView"
      @closed="onAuthModalClosed"
    />

    <button
      v-if="isMobileNavOpen"
      type="button"
      class="app-header__backdrop"
      aria-label="Close menu"
      tabindex="-1"
      @click="closeMobileNav"
    />
  </header>
</template>

<script setup lang="ts">
defineComponent({
  name: 'AppHeader',
})

import { USER_ROLES } from '~/constants/roles'

const headerStore = useHeaderStore()
const authStore = useAuthStore()
const router = useRouter()
const config = useRuntimeConfig()

const authModalOpen = ref(false)
const authModalView = ref<'login' | 'register'>('login')
const suppressAuthModalOpenUntil = ref(0)
const isMobileNavOpen = ref(false)

const openAuthModal = (view: 'login' | 'register') => {
  if (Date.now() < suppressAuthModalOpenUntil.value) return
  authModalView.value = view
  authModalOpen.value = true
}

const openAuthFromMobile = (view: 'login' | 'register') => {
  closeMobileNav()
  openAuthModal(view)
}

const onAuthModalClosed = () => {
  suppressAuthModalOpenUntil.value = Date.now() + 250
}

const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value
}

const closeMobileNav = () => {
  isMobileNavOpen.value = false
}

const isTeacherSupport = computed(() => {
  return router.currentRoute.value.path.startsWith('/teacher-support')
})

const isHomePage = computed(() => {
  return router.currentRoute.value.path === '/'
})

const isServicesDropdownOpen = ref(false)
const isMobileServicesOpen = ref(false)
let closeTimer: ReturnType<typeof setTimeout> | null = null

const teacherServicesList = [
  { slug: 'job-placement', num: '01', title: 'Job Placement', badge: 'Recommended', featured: true, to: '/teacher-support/services/job-placement' },
  { slug: 'visa-service', num: '02', title: 'Vietnam Visa Service', to: '/teacher-support/services/visa-service' },
  { slug: 'consular-legalization', num: '03', title: 'Apostille & Legalization', to: '/teacher-support/services/consular-legalization' },
  { slug: 'coe-support', num: '04', title: 'DMW & OEC Support', to: '/teacher-support/services/coe-support' },
  { slug: 'work-permit-trc', num: '05', title: 'Work Permit & TRC', to: '/teacher-support/services/work-permit-trc' },
  { slug: 'other-supports', num: '06', title: 'Relocation & Settlement', to: '/teacher-support/services/other-supports' },
]

const isServicesActive = computed(() => {
  const p = router.currentRoute.value.path
  return p.startsWith('/teacher-support')
})

const openServicesDropdown = () => {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
  isServicesDropdownOpen.value = true
}

const scheduleCloseServicesDropdown = () => {
  if (closeTimer) clearTimeout(closeTimer)
  closeTimer = setTimeout(() => {
    isServicesDropdownOpen.value = false
  }, 160)
}

const cancelCloseServicesDropdown = () => {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
}

const closeServicesDropdown = () => {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
  isServicesDropdownOpen.value = false
}

const toggleServicesDropdown = () => {
  isServicesDropdownOpen.value = !isServicesDropdownOpen.value
}

const onServicesTriggerClick = (item: { to: string }) => {
  if (isServicesDropdownOpen.value) {
    closeServicesDropdown()
    router.push(item.to)
  } else {
    openServicesDropdown()
  }
}

watch(
  () => router.currentRoute.value.fullPath,
  () => {
    closeServicesDropdown()
    closeMobileNav()
  }
)

const isScrolled = ref(false)

const handleScroll = () => {
  if (import.meta.client) {
    isScrolled.value = window.scrollY > 15
  }
}

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
  }
})

const menuItems = computed(() => {
  if (isTeacherSupport.value) {
    return [
      { label: 'Services', to: '/teacher-support#services', hasDropdown: true },
      { label: 'Your Situation', to: '/teacher-support/your-situation' },
      { label: 'Why Us', to: '/teacher-support/why-us' },
      { label: 'Useful Guides', to: '/teacher-support/guides' },
      { label: 'FAQs', to: '/teacher-support/faqs' },
    ]
  }
  return [
    { label: 'Schools & Centers', to: ROUTE_PAGE.COMPANY.GET },
    { label: 'Find Jobs', to: ROUTE_PAGE.SEARCH },
    { label: 'Teacher Support', to: '/teacher-support', hasDropdown: true },
    { label: 'Teacher Guides', to: '/blog' },
  ]
})

const isActive = (item: { to: string }) => {
  const currentPath = router.currentRoute.value.path
  if (item.to.startsWith('/#')) {
    return currentPath === '/' && router.currentRoute.value.hash === item.to.slice(1)
  }
  if (isTeacherSupport.value) {
    return currentPath === item.to || currentPath.startsWith(item.to + '/')
  }
  return currentPath === item.to
}

const userRole = computed(() => authStore.user?.role)
const isAdmin = computed(() => userRole.value === USER_ROLES.ADMIN)
const isCompany = computed(() => userRole.value === USER_ROLES.COMPANY)

const showPostButton = computed(() => !authStore.isLoggedIn)

const handlePostJobFree = () => {
  closeMobileNav()
  router.push(ROUTE_PAGE.PAGE)
}

const goDashboard = (path: string, query?: Record<string, any>) => {
  closeMobileNav()
  if (path === ROUTE_PAGE.DASHBOARD.ADMIN && config.public.adminUrl) {
    const queryStr = query ? '?' + new URLSearchParams(query).toString() : ''
    window.location.href = `${config.public.adminUrl}${path}${queryStr}`
  } else {
    router.push({ path, query: query ?? {} })
  }
}

const accountPageTarget = computed(() => {
  if (isAdmin.value) {
    return { path: ROUTE_PAGE.DASHBOARD.ADMIN, query: { view: 'adminSettings' } }
  }
  if (isCompany.value) {
    return { path: ROUTE_PAGE.DASHBOARD.COMPANY, query: { view: 'settings' } }
  }
  return { path: ROUTE_PAGE.DASHBOARD.USER, query: { view: 'editProfile' } }
})

const goAccountFromMobile = () => {
  goDashboard(accountPageTarget.value.path, accountPageTarget.value.query)
}

const logoutFromMobile = () => {
  closeMobileNav()
  authStore.logout()
}

const userDropdownItems = computed(() => {
  const items: any[] = []

  items.push([
    {
      label: 'Account Settings',
      icon: 'i-lucide-user',
      onSelect: () =>
        goDashboard(accountPageTarget.value.path, accountPageTarget.value.query),
    },
  ])

  items.push([
    {
      label: 'Sign Out',
      icon: 'i-lucide-log-out',
      onSelect: () => authStore.logout(),
    },
  ])

  return items
})

watch(
  () => router.currentRoute.value.fullPath,
  () => closeMobileNav(),
)

watch(isMobileNavOpen, (open) => {
  if (!import.meta.client) return
  document.body.style.overflow = open ? 'hidden' : ''
})

onUnmounted(() => {
  if (import.meta.client) {
    document.body.style.overflow = ''
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<style lang="scss">
@use '@/assets/styles/components/app-header.scss';
</style>
