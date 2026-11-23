<template>
  <div class="page-job-upload">
    <div class="employer-post-shell">
      <header class="employer-page-head">
        <button
          type="button"
          class="employer-page-back"
          aria-label="Back to home"
          @click="goBack"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M15 6L9 12L15 18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <h1 data-post-page-title>{{ $t('job.uploadJob.title') }}</h1>
      </header>

      <div
        class="employer-post-card"
        data-post-wizard
        data-post-wizard-mode="standalone"
        data-company-lookup-required="true"
      >
        <div class="employer-stepper" aria-label="Job posting progress">
          <div class="employer-stepper-track" :class="{ 'is-done': wizardStep > 0 }" aria-hidden="true" />
          <div
            class="employer-step"
            :class="{ 'is-active': wizardStep === 0, 'is-done': wizardStep > 0 }"
            data-step-indicator="1"
          >
            <button
              v-if="wizardStep > 0"
              type="button"
              class="employer-step-icon employer-step-icon-btn"
              :aria-label="$t('job.uploadJob.stepCompanyInfo')"
              @click="goBackToCompanyStep()"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
            </button>
            <span v-else class="employer-step-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 4L19 8V19H5V8L12 4Z"
                  stroke="currentColor"
                  stroke-width="1.9"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 19V12H15V19"
                  stroke="currentColor"
                  stroke-width="1.9"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <strong>Step 1: {{ $t('job.uploadJob.stepCompanyInfo') }}</strong>
          </div>
          <div
            class="employer-step"
            :class="{ 'is-active': wizardStep === 1 }"
            data-step-indicator="2"
          >
            <span class="employer-step-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"
                  stroke="currentColor"
                  stroke-width="1.9"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 2v6h6M16 13H8M16 17H8M10 9H8"
                  stroke="currentColor"
                  stroke-width="1.9"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            <strong>Step 2: {{ $t('job.uploadJob.stepPostDetail') }}</strong>
          </div>
        </div>

        <div class="upload-stepper-wrap">
          <!-- Step 1: School Information -->
          <div v-show="wizardStep === 0">
            <section class="employer-step-panel">
              <!-- Case 1: Existing School Profile Selected -->
              <div v-if="selectedSchool" class="school-selected-card">
                <div class="school-profile-banner">
                  <div class="school-profile-info">
                    <div class="school-profile-avatar">
                      <img
                        v-if="selectedSchool.logo && !selectedSchoolLogoError"
                        :src="normalizeCompanyLogo(selectedSchool.logo) ?? undefined"
                        alt=""
                        class="object-contain"
                        @error="selectedSchoolLogoError = true"
                      />
                      <span v-else>{{ getSchoolInitials(selectedSchool.name) }}</span>
                    </div>
                    <div class="school-profile-meta">
                      <div class="school-profile-badge">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                          <path d="M22 4 12 14.01l-3-3"/>
                        </svg>
                        <span>Verified School Profile</span>
                      </div>
                      <h3 class="school-profile-name">{{ selectedSchool.name }}</h3>
                      <p v-if="selectedSchool.address || selectedSchool.taxAddress" class="school-profile-address">
                        📍 {{ cleanHtml(selectedSchool.address || selectedSchool.taxAddress) }}
                      </p>
                    </div>
                  </div>

                  <div class="flex items-center justify-between pt-2 border-t border-slate-100">
                    <button type="button" class="school-change-btn" @click="resetSchoolSelection()">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
                        <path d="M21 3v5h-5"/>
                        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
                        <path d="M3 21v-5h5"/>
                      </svg>
                      <span>Select another school</span>
                    </button>
                    <span v-if="selectedSchool.website" class="text-xs text-slate-400">
                      🔗 {{ selectedSchool.website }}
                    </span>
                  </div>

                  <div class="school-profile-notice">
                    ℹ️ You are posting a job on behalf of <strong>{{ selectedSchool.name }}</strong>. Your job posting and candidate applications will be managed in your recruiter dashboard. Official school brand information is verified and protected.
                  </div>
                </div>

                <div class="employer-actions mt-5">
                  <button
                    type="button"
                    class="employer-primary-btn"
                    data-company-confirm
                    @click="confirmCreateSchool()"
                  >
                    {{ $t('job.uploadJob.continueNext') }}
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      style="margin-left: 5px"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Case 2: Creating New School Profile -->
              <div v-else-if="isCreatingNewSchool" class="school-selected-card">
                <div class="school-new-form">
                  <div class="flex items-center pb-4 mb-4 border-b border-slate-100">
                    <button
                      type="button"
                      class="text-sm font-medium text-slate-500 hover:text-blue-600 inline-flex items-center gap-1.5 transition-colors"
                      @click="resetSchoolSelection()"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
                      <span>Back to school search</span>
                    </button>
                  </div>

                  <div class="school-new-fields-group">
                    <div class="employer-field-stack">
                      <label class="employer-input-label" for="new-school-name">
                        School / Institution Name
                        <span class="text-red-500">*</span>
                      </label>
                      <UInput
                        id="new-school-name"
                        v-model.trim="companyAdd.name"
                        variant="outline"
                        placeholder="Enter school or institution name"
                        :ui="{ root: 'w-full', base: 'h-11 rounded-xl w-full text-[15px]' }"
                        @input="companyErrors.name = ''"
                      />
                      <p v-if="companyErrors.name" class="mt-0.5 text-sm !text-red-500">
                        {{ companyErrors.name }}
                      </p>
                    </div>

                    <div class="employer-field-stack">
                      <label class="employer-input-label" for="new-school-address">
                        {{ $t('job.uploadJob.detailAddressLabel') }}
                        <span class="text-red-500">*</span>
                      </label>
                      <UInput
                        id="new-school-address"
                        v-model.trim="companyAdd.address"
                        variant="outline"
                        placeholder="Main campus or branch address"
                        :ui="{ root: 'w-full', base: 'h-11 rounded-xl w-full text-[15px]' }"
                        @input="companyErrors.address = ''"
                      />
                      <p v-if="companyErrors.address" class="mt-0.5 text-sm !text-red-500">
                        {{ companyErrors.address }}
                      </p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div class="employer-field-stack">
                        <label class="employer-input-label" for="new-school-website">
                          School Website / Fanpage
                        </label>
                        <UInput
                          id="new-school-website"
                          v-model.trim="companyAdd.website"
                          variant="outline"
                          placeholder="https://school.edu.vn"
                          :ui="{ root: 'w-full', base: 'h-11 rounded-xl w-full text-[15px]' }"
                        />
                      </div>
                      <div class="employer-field-stack">
                        <label class="employer-input-label" for="new-school-mst">
                          Tax ID / Registration Code
                          <span class="text-xs text-slate-400 font-normal ml-1">(Optional)</span>
                        </label>
                        <UInput
                          id="new-school-mst"
                          v-model.trim="companyAdd.mst"
                          variant="outline"
                          placeholder="Tax code or registration number (if any)"
                          :ui="{ root: 'w-full', base: 'h-11 rounded-xl w-full text-[15px]' }"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="employer-actions mt-5">
                  <button
                    type="button"
                    class="employer-primary-btn"
                    data-company-confirm
                    @click="confirmCreateSchool()"
                  >
                    {{ $t('job.uploadJob.continueNext') }}
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      style="margin-left: 5px"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Case 3: Auto-suggest Typeahead Search Box -->
              <div v-else class="school-search-box">
                <div class="employer-field-stack employer-field-full">
                  <label class="employer-input-label" for="school-search-input">
                    Search your School / Educational Institution
                    <span class="text-red-500">*</span>
                  </label>
                  
                  <div class="relative w-full" ref="schoolSearchContainerRef">
                    <div class="relative flex items-center">
                      <svg
                        class="absolute left-3.5 pointer-events-none text-slate-400"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.3-4.3"/>
                      </svg>
                      
                      <input
                        id="school-search-input"
                        v-model="schoolSearchQuery"
                        type="text"
                        class="school-search-native-input"
                        placeholder="Type school name (e.g. Pathway, Vinschool, Apollo, ILA...)"
                        autocomplete="off"
                        @input="onSearchSchoolInput"
                        @focus="onSearchInputFocus"
                        @keydown.enter.prevent="onSearchEnterKey"
                      />

                      <div class="absolute right-3.5 flex items-center gap-1.5">
                        <span v-if="isSearchingSchools" class="text-xs text-blue-600 font-medium animate-pulse">
                          Searching...
                        </span>
                        <button
                          v-if="schoolSearchQuery"
                          type="button"
                          class="w-6 h-6 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                          aria-label="Clear search"
                          @click="clearSchoolSearch"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                            <path d="M18 6 6 18M6 6l12 12"/>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <!-- Dropdown Suggestions -->
                    <div
                      v-if="isSearchDropdownOpen && (schoolSearchResults.length > 0 || schoolSearchQuery.trim())"
                      class="school-suggest-dropdown"
                    >
                      <div v-if="schoolSearchResults.length > 0" class="school-suggest-list">
                        <div
                          v-for="s in schoolSearchResults"
                          :key="s.id"
                          class="school-suggest-item"
                          @click="selectSchool(s)"
                        >
                          <div class="school-suggest-logo">
                            <img
                              v-if="s.logo && !logoErrorMap[s.id]"
                              :src="normalizeCompanyLogo(s.logo) ?? undefined"
                              alt=""
                              class="object-contain"
                              @error="onLogoError(s.id)"
                            />
                            <span v-else>{{ getSchoolInitials(s.name) }}</span>
                          </div>
                          <div class="school-suggest-info">
                            <div class="school-suggest-name">{{ s.name }}</div>
                            <div v-if="s.address || s.taxAddress" class="school-suggest-sub">
                              📍 {{ cleanHtml(s.address || s.taxAddress) }}
                            </div>
                          </div>
                          <span class="school-suggest-badge">Select this school →</span>
                        </div>
                      </div>

                      <!-- Add new school option -->
                      <div
                        class="school-suggest-new-item"
                        @click="startCreateNewSchool(schoolSearchQuery)"
                      >
                        <div class="school-suggest-plus">➕</div>
                        <div class="school-suggest-new-info">
                          <strong>School not found in the list?</strong>
                          <span>Click here to add new: "<strong>{{ schoolSearchQuery.trim() || 'Your school name' }}</strong>"</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </section>
          </div>

          <!-- Step 2: Job Details -->
          <div v-show="wizardStep === 1">
            <section class="employer-step-panel employer-step-detail-wrap">
              <UCollapsible
                v-model:open="step2BasicOpen"
                :unmount-on-hide="false"
                class="employer-accordion w-full"
                :class="{ 'is-open': step2BasicOpen }"
                :ui="{
                  content:
                    'data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-visible',
                }"
              >
                <template #default="{ open }">
                  <button
                    type="button"
                    class="employer-accordion-head"
                    :aria-expanded="open"
                    data-accordion-toggle
                  >
                    <span class="employer-accordion-num">1</span>
                    <span class="employer-accordion-label">Basic Information</span>
                    <svg class="employer-accordion-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </template>
                <template #content>
                  <div class="employer-accordion-body">
                    <div class="employer-field-stack">
                      <label for="job-title" class="employer-input-label">
                        {{ $t('job.uploadJob.nameJobLabel') }}
                        <span class="text-red-500">{{ $t('job.uploadJob.mandatoryChar') }}</span>
                      </label>
                      <UInput
                        id="job-title"
                        v-model="job.title"
                        :placeholder="$t('job.uploadJob.nameJobPlaceHolder')"
                        :ui="{
                          root: 'w-full',
                          base: 'h-11 w-full rounded-xl' + fieldErrorRingClass(jobErrors.title),
                        }"
                        @input="jobErrors.title = ''"
                      />
                      <p v-if="jobErrors.title" class="mt-1 text-sm !text-red-500">{{ jobErrors.title }}</p>
                    </div>

                    <div class="mt-4 employer-field-stack rich-text-output">
                      <label class="employer-input-label">
                        {{ $t('job.uploadJob.detailJobLabel') }}
                        <span class="text-red-500">{{ $t('job.uploadJob.mandatoryChar') }}</span>
                      </label>
                      <RichTextEditor
                        id="job-detail-description"
                        v-model="job.detailDescription"
                        class="w-full rich-text-content"
                        :class="{ 'ring-1 ring-red-300': jobErrors.detailDescription }"
                        placeholder="Enter job description & responsibilities"
                      />
                      <p v-if="jobErrors.detailDescription" class="mt-1 text-sm !text-red-500">{{ jobErrors.detailDescription }}</p>
                    </div>

                    <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div class="employer-field-stack">
                        <label class="employer-input-label">
                          {{ $t('job.uploadJob.categoryLabel') }}
                          <span class="text-red-500">{{ $t('job.uploadJob.mandatoryChar') }}</span>
                        </label>
                        <div
                          class="job-vselect w-full min-w-0"
                          :class="{ 'job-vselect--error': jobErrors.category }"
                        >
                          <v-select
                            v-model="categoryForSelect"
                            :options="categoryItemsSearchable"
                            :append-to-body="true"
                            :calculate-position="vueSelectCalculatePosition"
                            multiple
                            searchable
                            class="w-full text-sm"
                            :placeholder="$t('job.uploadJob.chooseCategory')"
                            label="label"
                            :clear-search-on-blur="() => true"
                            @open="onMultiSelectOpen"
                            @close="onMultiSelectClose"
                            @update:model-value="jobErrors.category = ''"
                          />
                        </div>
                        <p v-if="jobErrors.category" class="mt-1 text-sm !text-red-500">{{ jobErrors.category }}</p>
                      </div>
                      <div class="employer-field-stack">
                        <label class="employer-input-label">
                          {{ $t('job.uploadJob.typeJobLabel') }}
                          <span class="text-red-500">{{ $t('job.uploadJob.mandatoryChar') }}</span>
                        </label>
                        <div
                          class="job-vselect w-full min-w-0"
                          :class="{ 'job-vselect--error': jobErrors.typeOfEmployment }"
                        >
                          <v-select
                            id="job-type-employment"
                            v-model="typeOfEmploymentForSelect"
                            :options="employmentTypeSelectItems"
                            :append-to-body="true"
                            :calculate-position="vueSelectCalculatePosition"
                            multiple
                            class="w-full text-sm"
                            :placeholder="$t('job.uploadJob.chooseTypeOfEmployment')"
                            label="label"
                            :clear-search-on-blur="() => true"
                            @open="onMultiSelectOpen"
                            @close="onMultiSelectClose"
                            @update:model-value="jobErrors.typeOfEmployment = ''"
                          />
                        </div>
                        <p v-if="jobErrors.typeOfEmployment" class="mt-1 text-sm !text-red-500">{{ jobErrors.typeOfEmployment }}</p>
                      </div>
                    </div>

                    <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div class="employer-field-stack">
                        <label class="employer-input-label">
                          {{ $t('job.uploadJob.gradeLabel') }}
                          <span class="text-red-500">{{ $t('job.uploadJob.mandatoryChar') }}</span>
                        </label>
                        <div
                          class="job-vselect w-full min-w-0"
                          :class="{ 'job-vselect--error': jobErrors.grade }"
                        >
                          <v-select
                            id="job-grade"
                            v-model="gradeForSelect"
                            :options="gradeSelectItems"
                            :append-to-body="true"
                            :calculate-position="vueSelectCalculatePosition"
                            multiple
                            class="w-full text-sm"
                            :placeholder="$t('job.uploadJob.chooseGradeLevel')"
                            label="label"
                            :clear-search-on-blur="() => true"
                            @open="onMultiSelectOpen"
                            @close="onMultiSelectClose"
                            @update:model-value="jobErrors.grade = ''"
                          />
                        </div>
                        <p v-if="jobErrors.grade" class="mt-1 text-sm !text-red-500">{{ jobErrors.grade }}</p>
                      </div>
                      <div id="job-deadline-field" class="employer-field-stack">
                        <label class="employer-input-label">
                          {{ $t('job.uploadJob.deadlineLabel') }}
                          <span class="text-red-500">{{ $t('job.uploadJob.mandatoryChar') }}</span>
                        </label>
                        <UPopover v-model:open="isDeadlinePopoverOpen">
                          <UButton
                            :ui="{
                              base:
                                'h-11 w-full justify-start rounded-xl bg-white text-sm font-medium' +
                                fieldErrorRingClass(jobErrors.deadline),
                            }"
                            color="neutral"
                            variant="outline"
                          >
                            <span class="flex w-full items-center justify-between gap-3">
                              <span class="min-w-0 truncate font-medium">
                                <template v-if="job.deadline">
                                  {{ formatDateDeadline(job.deadline) }}
                                </template>
                                <template v-else>
                                  {{ $t('job.uploadJob.chooseDate') }}
                                </template>
                              </span>

                              <UIcon
                                name="i-lucide-calendar"
                                class="h-4 w-4 shrink-0 text-slate-500"
                                aria-hidden="true"
                              />
                            </span>
                          </UButton>
                          <template #content>
                            <UCalendar
                              v-model="deadlineCalendarDate"
                              class="p-2"
                              :min-value="minDeadlineDate"
                              :max-value="maxDeadlineDate"
                              :is-hidden="isDeadlineDateHidden"
                              @update:model-value="
                                (val) => {
                                  jobErrors.deadline = ''
                                  if (val) {
                                    isDeadlinePopoverOpen = false
                                  }
                                }
                              "
                            />
                          </template>
                        </UPopover>
                        <p v-if="jobErrors.deadline" class="mt-1 text-sm !text-red-500">{{ jobErrors.deadline }}</p>
                      </div>
                    </div>

                    <!-- ESL Specific Overview Fields: Work Mode, Vacancies, Start Date -->
                    <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                      <!-- Work Mode -->
                      <div class="employer-field-stack">
                        <label class="employer-input-label">
                          {{ $t('job.uploadJob.workModeLabel') }}
                        </label>
                        <USelect
                          id="job-work-mode"
                          v-model="jobWorkMode"
                          :items="workModeOptions"
                          :placeholder="$t('job.uploadJob.chooseWorkMode')"
                          :ui="{ base: 'h-11 w-full rounded-xl' }"
                          class="w-full text-sm"
                        />
                      </div>

                      <!-- Number of Vacancies -->
                      <div class="employer-field-stack">
                        <label class="employer-input-label">
                          {{ $t('job.uploadJob.vacanciesLabel') }}
                        </label>
                        <UInput
                          id="job-vacancies"
                          v-model.number="jobVacancies"
                          type="number"
                          min="1"
                          max="100"
                          :placeholder="$t('job.uploadJob.vacanciesPlaceholder')"
                          :ui="{
                            root: 'w-full',
                            base: 'h-11 w-full rounded-xl',
                          }"
                          class="w-full text-sm"
                        />
                      </div>

                      <!-- Start Date -->
                      <div class="employer-field-stack">
                        <label class="employer-input-label">
                          {{ $t('job.uploadJob.startDateLabel') }}
                        </label>
                        <UInput
                          id="job-start-date"
                          v-model="jobStartDate"
                          type="text"
                          :placeholder="$t('job.uploadJob.startDatePlaceholder')"
                          :ui="{
                            root: 'w-full',
                            base: 'h-11 w-full rounded-xl',
                          }"
                          class="w-full text-sm"
                        />
                      </div>
                    </div>

                    <!-- Contract Length & Working Schedule -->
                    <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                      <!-- Contract Length -->
                      <div class="employer-field-stack">
                        <label class="employer-input-label">
                          {{ $t('job.uploadJob.contractLengthLabel') }}
                        </label>
                        <UInput
                          id="job-contract-length"
                          v-model="jobContractLength"
                          type="text"
                          :placeholder="$t('job.uploadJob.contractLengthPlaceholder')"
                          :ui="{
                            root: 'w-full',
                            base: 'h-11 w-full rounded-xl',
                          }"
                          class="w-full text-sm"
                        />
                      </div>

                      <!-- Working Schedule -->
                      <div class="employer-field-stack md:col-span-2">
                        <label class="employer-input-label">
                          {{ $t('job.uploadJob.workingScheduleLabel') }}
                        </label>
                        <UInput
                          id="job-working-schedule"
                          v-model="jobWorkingSchedule"
                          type="text"
                          :placeholder="$t('job.uploadJob.workingSchedulePlaceholder')"
                          :ui="{
                            root: 'w-full',
                            base: 'h-11 w-full rounded-xl',
                          }"
                          class="w-full text-sm"
                        />
                      </div>
                    </div>

                    <!-- Salary & Compensation Component -->
                    <div class="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                      <div class="flex items-center justify-between flex-wrap gap-2">
                        <label class="employer-input-label !mb-0 font-semibold text-slate-800">
                          Salary & Compensation
                        </label>
                        <!-- Negotiable Checkbox -->
                        <label class="flex items-center gap-2 cursor-pointer text-sm font-medium text-slate-700 select-none">
                          <input
                            v-model="isNegotiable"
                            type="checkbox"
                            class="w-4 h-4 rounded text-primary-600 focus:ring-primary-500 border-slate-300"
                            @change="onNegotiableChange"
                          />
                          <span>{{ $t('job.uploadJob.isNegotiableLabel') }}</span>
                        </label>
                      </div>

                      <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        <!-- 1. Currency -->
                        <div class="employer-field-stack">
                          <label class="employer-input-label text-xs">
                            {{ $t('job.uploadJob.currencyLabel') }}
                          </label>
                          <USelect
                            id="job-currency"
                            v-model="jobCurrency"
                            :items="currencyItems"
                            :disabled="isNegotiable"
                            :ui="{ base: 'h-10 w-full rounded-xl bg-white' }"
                            class="w-full text-sm"
                          />
                        </div>

                        <!-- 2. Salary Frequency / Period -->
                        <div class="employer-field-stack">
                          <label class="employer-input-label text-xs">
                            {{ $t('job.uploadJob.salaryPeriodLabel') }}
                          </label>
                          <USelect
                            id="job-salary-period"
                            :items="salaryPeriodItems"
                            :model-value="jobSalaryPeriod?.toString()"
                            :disabled="isNegotiable"
                            :placeholder="$t('job.uploadJob.chooseSalaryType')"
                            :ui="{ base: 'h-10 w-full rounded-xl bg-white' }"
                            class="w-full text-sm"
                            @update:model-value="(val) => { jobSalaryPeriod = Number(val ?? 1) }"
                          />
                        </div>

                        <!-- 3. Pay Basis (Gross / Net) -->
                        <div class="employer-field-stack">
                          <label class="employer-input-label text-xs">
                            {{ $t('job.uploadJob.salaryRateTypeLabel') }}
                          </label>
                          <USelect
                            id="job-rate-type"
                            v-model="jobSalaryRateType"
                            :items="salaryRateTypeItems"
                            :disabled="isNegotiable"
                            :ui="{ base: 'h-10 w-full rounded-xl bg-white' }"
                            class="w-full text-sm"
                          />
                        </div>
                      </div>

                      <!-- Min & Max Salary Row (Only when NOT Negotiable) -->
                      <div v-if="!isNegotiable" class="grid grid-cols-1 gap-3 sm:grid-cols-2 pt-1">
                        <div class="employer-field-stack">
                          <label class="employer-input-label text-xs">
                            {{ $t('job.uploadJob.minSalaryLabel') }} ({{ jobCurrency }})
                            <span class="text-red-500">*</span>
                          </label>
                          <UInput
                            id="job-salary-min"
                            :model-value="formatCurrency(job.salaryMin)"
                            type="text"
                            :placeholder="jobCurrency === 'USD' ? 'e.g. 1,500' : 'e.g. 35,000,000'"
                            :ui="{
                              root: 'w-full',
                              base: 'h-10 w-full rounded-xl bg-white' + fieldErrorRingClass(jobErrors.salaryMin),
                            }"
                            class="w-full text-sm"
                            @update:model-value="(val) => {
                              job.salaryMin = unformatCurrency(val)
                              jobErrors.salaryMin = ''
                            }"
                          />
                          <p v-if="jobErrors.salaryMin" class="mt-1 text-sm !text-red-500">{{ jobErrors.salaryMin }}</p>
                        </div>

                        <div class="employer-field-stack">
                          <label class="employer-input-label text-xs">
                            {{ $t('job.uploadJob.maxSalaryLabel') }} ({{ jobCurrency }})
                            <span class="text-red-500">*</span>
                          </label>
                          <UInput
                            id="job-salary-max"
                            :model-value="formatCurrency(job.salaryMax)"
                            type="text"
                            :placeholder="jobCurrency === 'USD' ? 'e.g. 2,200' : 'e.g. 50,000,000'"
                            :ui="{
                              root: 'w-full',
                              base: 'h-10 w-full rounded-xl bg-white' + fieldErrorRingClass(jobErrors.salaryMax),
                            }"
                            class="w-full text-sm"
                            @update:model-value="(val) => {
                              job.salaryMax = unformatCurrency(val)
                              jobErrors.salaryMax = ''
                            }"
                          />
                          <p v-if="jobErrors.salaryMax" class="mt-1 text-sm !text-red-500">{{ jobErrors.salaryMax }}</p>
                        </div>
                      </div>

                      <div v-else class="text-xs text-slate-500 italic py-1">
                        ℹ️ Mức lương được ghi nhận là "Thỏa thuận" (Negotiable) — ứng viên và trường sẽ thảo luận chi tiết khi phỏng vấn.
                      </div>
                    </div>

                    <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div class="employer-field-stack">
                        <label class="employer-input-label">
                          {{ $t('job.uploadJob.locationJobLabel') }}
                          <span class="text-red-500">{{ $t('job.uploadJob.mandatoryChar') }}</span>
                        </label>
                        <div
                          class="job-vselect w-full min-w-0"
                          :class="{ 'job-vselect--error': jobErrors.location }"
                        >
                          <v-select
                            id="job-location"
                            v-model="locationForSelect"
                            :options="locationSelectItems"
                            :append-to-body="true"
                            :calculate-position="vueSelectCalculatePosition"
                            multiple
                            searchable
                            class="w-full text-sm"
                            :placeholder="$t('job.uploadJob.chooseLocation')"
                            label="label"
                            :clear-search-on-blur="() => true"
                            @open="onMultiSelectOpen"
                            @close="onMultiSelectClose"
                            @update:model-value="jobErrors.location = ''"
                          />
                        </div>
                        <p v-if="jobErrors.location" class="mt-1 text-sm !text-red-500">{{ jobErrors.location }}</p>
                      </div>

                      <!-- Standard text input for address instead of RichTextEditor -->
                      <div class="employer-field-stack">
                        <label class="employer-input-label">
                          {{ $t('job.uploadJob.addressJobLabel') }}
                          <span class="text-red-500">{{ $t('job.uploadJob.mandatoryChar') }}</span>
                        </label>
                        <UInput
                          id="job-address"
                          v-model="job.address"
                          :placeholder="$t('job.uploadJob.addressJobPlaceholder')"
                          :ui="{
                            root: 'w-full',
                            base: 'h-11 w-full rounded-xl' + fieldErrorRingClass(jobErrors.address),
                          }"
                          class="w-full text-sm"
                          @input="jobErrors.address = ''"
                        />
                        <p v-if="jobErrors.address" class="mt-1 text-sm !text-red-500">{{ jobErrors.address }}</p>
                      </div>
                    </div>
                  </div>
                </template>
              </UCollapsible>

              <UCollapsible
                v-model:open="step2CandidateOpen"
                :unmount-on-hide="false"
                class="employer-accordion w-full"
                :class="{ 'is-open': step2CandidateOpen }"
                :ui="{
                  content:
                    'data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-visible',
                }"
              >
                <template #default="{ open }">
                  <button type="button" class="employer-accordion-head" :aria-expanded="open" data-accordion-toggle>
                    <span class="employer-accordion-num">2</span>
                    <span class="employer-accordion-label">Candidate Requirements & Benefits</span>
                    <svg class="employer-accordion-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </template>
                <template #content>
                  <div class="employer-accordion-body">
                    <div class="employer-grid">
                      <!-- 1. Native / Nationality Preference -->
                      <div class="employer-field-stack md:col-span-2">
                        <label class="employer-input-label">
                          {{ $t('job.uploadJob.nationalityPreferenceLabel') }}
                        </label>
                        <USelect
                          id="job-nationality-pref"
                          v-model="jobNationalityPreference"
                          :items="nationalityPreferenceOptions"
                          :placeholder="$t('job.uploadJob.chooseNationalityPreference')"
                          :ui="{ base: 'h-11 w-full rounded-xl' }"
                          class="w-full text-sm"
                        />
                      </div>

                      <!-- 2. Academic Degree Requirement -->
                      <div class="employer-field-stack">
                        <label class="employer-input-label">
                          {{ $t('job.uploadJob.requiredQualificationLabel') }}
                          <span class="text-red-500">{{ $t('job.uploadJob.mandatoryChar') }}</span>
                        </label>
                        <div
                          id="job-required-qualification"
                          class="job-vselect w-full min-w-0"
                          :class="{ 'job-vselect--error': jobErrors.requiredQualification }"
                        >
                          <v-select
                            v-model="requiredQualificationForSelect"
                            :options="requiredQualificationSelectItems"
                            :append-to-body="true"
                            :calculate-position="vueSelectCalculatePosition"
                            multiple
                            searchable
                            class="w-full text-sm"
                            :placeholder="$t('job.uploadJob.requiredQualificationLabel')"
                            label="label"
                            :clear-search-on-blur="() => true"
                            @open="onMultiSelectOpen"
                            @close="onMultiSelectClose"
                            @update:model-value="jobErrors.requiredQualification = ''"
                          />
                        </div>
                        <p v-if="jobErrors.requiredQualification" class="mt-1 text-sm !text-red-500">{{ jobErrors.requiredQualification }}</p>
                      </div>

                      <!-- 3. Teaching Certificates (Multiselect) -->
                      <div class="employer-field-stack">
                        <label class="employer-input-label">
                          {{ $t('job.uploadJob.certificatesLabel') }}
                        </label>
                        <div class="job-vselect w-full min-w-0">
                          <v-select
                            id="job-certificates"
                            v-model="certificatesForSelect"
                            :options="teachingCertificateOptions"
                            :append-to-body="true"
                            :calculate-position="vueSelectCalculatePosition"
                            multiple
                            searchable
                            class="w-full text-sm"
                            :placeholder="$t('job.uploadJob.chooseCertificates')"
                            label="label"
                            :clear-search-on-blur="() => true"
                            @open="onMultiSelectOpen"
                            @close="onMultiSelectClose"
                          />
                        </div>
                      </div>

                      <!-- 4. Experience Level -->
                      <div class="employer-field-stack">
                        <label class="employer-input-label">
                          {{ $t('job.uploadJob.experienceLabel') }}
                          <span class="text-red-500">{{ $t('job.uploadJob.mandatoryChar') }}</span>
                        </label>
                        <USelect
                          :items="experienceLevelItems"
                          :model-value="job.experienceLevel?.toString()"
                          :content="{ side: 'bottom' }"
                          :placeholder="$t('job.uploadJob.chooseExperienceLevel')"
                          :ui="{
                            base: 'h-11 w-full rounded-xl' + fieldErrorRingClass(jobErrors.experienceLevel),
                          }"
                          class="w-full text-sm"
                          @update:model-value="
                            (val) => {
                              job.experienceLevel = Number(val ?? 0)
                              jobErrors.experienceLevel = ''
                            }
                          "
                        />
                        <p v-if="jobErrors.experienceLevel" class="mt-1 text-sm !text-red-500">{{ jobErrors.experienceLevel }}</p>
                      </div>

                      <!-- 5. Gender Preference (With No preference / Any) -->
                      <div class="employer-field-stack">
                        <label class="employer-input-label">
                          {{ $t('job.uploadJob.genderLabel') }}
                        </label>
                        <div
                          class="job-vselect w-full min-w-0"
                          :class="{ 'job-vselect--error': jobErrors.gender }"
                        >
                          <v-select
                            id="job-gender"
                            v-model="genderForSelect"
                            :options="genderItems"
                            :append-to-body="true"
                            :calculate-position="vueSelectCalculatePosition"
                            multiple
                            searchable
                            class="w-full text-sm"
                            :placeholder="$t('job.uploadJob.chooseGender')"
                            label="label"
                            :clear-search-on-blur="() => true"
                            @open="onMultiSelectOpen"
                            @close="onMultiSelectClose"
                            @update:model-value="jobErrors.gender = ''"
                          />
                        </div>
                        <p v-if="jobErrors.gender" class="mt-1 text-sm !text-red-500">{{ jobErrors.gender }}</p>
                      </div>

                      <!-- 6. Teacher Benefits (Multiple choice) -->
                      <div class="employer-field-stack md:col-span-2">
                        <label class="employer-input-label">
                          {{ $t('job.uploadJob.benefitLabel') }}
                          <span class="text-red-500">{{ $t('job.uploadJob.mandatoryChar') }}</span>
                        </label>
                        <div
                          class="job-vselect w-full min-w-0"
                          :class="{ 'job-vselect--error': jobErrors.benefits }"
                        >
                          <v-select
                            id="job-benefit"
                            v-model="benefitsForSelect"
                            :options="jobBenefitsSelectItems"
                            :append-to-body="true"
                            :calculate-position="vueSelectCalculatePosition"
                            multiple
                            searchable
                            class="w-full text-sm"
                            :placeholder="$t('job.uploadJob.chooseBenefitLevel')"
                            label="label"
                            :clear-search-on-blur="() => true"
                            @open="onMultiSelectOpen"
                            @close="onMultiSelectClose"
                            @update:model-value="jobErrors.benefits = ''"
                          />
                        </div>
                        <p v-if="jobErrors.benefits" class="mt-1 text-sm !text-red-500">{{ jobErrors.benefits }}</p>
                      </div>
                    </div>
                    </div>
                  </template>
                </UCollapsible>

              <UCollapsible
                v-model:open="step2ContactOpen"
                :unmount-on-hide="false"
                class="employer-accordion w-full"
                :class="{ 'is-open': step2ContactOpen }"
                :ui="{
                  content:
                    'data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-visible',
                }"
              >
                <template #default="{ open }">
                  <button type="button" class="employer-accordion-head" :aria-expanded="open" data-accordion-toggle>
                    <span class="employer-accordion-num">3</span>
                    <span class="employer-accordion-label">Contact & Application Details</span>
                    <svg class="employer-accordion-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </template>
                <template #content>
                  <div class="employer-accordion-body">
                    <div class="employer-grid">
                        <div class="employer-field-stack">
                          <label for="job-email" class="employer-input-label">
                            {{ $t('job.uploadJob.emailJobLabel') }}
                            <span class="text-red-500">{{ $t('job.uploadJob.mandatoryChar') }}</span>
                          </label>
                          <UInput
                            id="job-email"
                            v-model.trim="job.email"
                            type="email"
                            :placeholder="$t('job.uploadJob.emailJobPlaceholder')"
                            :ui="{
                              root: 'w-full',
                              base: 'h-11 w-full rounded-xl' + fieldErrorRingClass(jobErrors.email),
                            }"
                            class="w-full text-sm"
                            @input="jobErrors.email = ''"
                          />
                          <p v-if="jobErrors.email" class="mt-1 text-sm !text-red-500">{{ jobErrors.email }}</p>
                        </div>
                        <div class="employer-field-stack">
                          <label for="job-phone" class="employer-input-label">
                            {{ $t('job.uploadJob.phoneJobLabel') }}
                            <span class="text-red-500">{{ $t('job.uploadJob.mandatoryChar') }}</span>
                          </label>
                          <UInput
                            id="job-phone"
                            v-model.trim="job.phoneNumber"
                            type="tel"
                            :placeholder="$t('job.uploadJob.phoneJobPlaceholder')"
                            :ui="{
                              root: 'w-full',
                              base: 'h-11 w-full rounded-xl' + fieldErrorRingClass(jobErrors.phoneNumber),
                            }"
                            class="w-full text-sm"
                            @input="jobErrors.phoneNumber = ''"
                          />
                          <p v-if="jobErrors.phoneNumber" class="mt-1 text-sm !text-red-500">{{ jobErrors.phoneNumber }}</p>
                        </div>
                    </div>
                  </div>
                </template>
              </UCollapsible>

              <label class="auth-check auth-check-terms employer-terms">
                <input v-model="agreeChecked" type="checkbox" :disabled="loading" />
                <span>
                  {{ $t('job.uploadJob.agreeUploadJobLabel') }}
                  <a href="/policy#dieu-khoan-dieu-kien" target="_blank" rel="noopener noreferrer" @click.stop>{{ $t('job.uploadJob.agreePolicy') }}</a>
                  {{ $t('job.uploadJob.and') }}
                  <a href="/policy#chinh-sach-quyen-rieng-tu" target="_blank" rel="noopener noreferrer" @click.stop>{{ $t('job.uploadJob.agreePrivacy') }}</a>
                </span>
              </label>

              <div class="employer-actions flex items-center justify-between gap-4 mt-8 pt-4 border-t border-slate-100 flex-wrap">
                <button
                  type="button"
                  class="employer-secondary-btn flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium text-sm transition"
                  @click="goBackToCompanyStep()"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  <span>{{ $t('job.uploadJob.backToStep1') }}</span>
                </button>

                <button
                  type="button"
                  class="employer-primary-btn employer-submit-btn"
                  :disabled="!agreeChecked || loading"
                  data-job-submit
                  @click="addJob()"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="margin-right: 6px" aria-hidden="true">
                    <path d="M22 2 11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="m22 2-7 20-4-9-9-4Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                  </svg>
                  <span data-job-submit-label>{{ loading ? '...' : $t('job.uploadJob.uploadJobContent') }}</span>
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>

    <!-- Crop Modal -->
    <Teleport to="body">
      <div
        v-if="showCropModal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        @click.self="closeCropModal"
      >
        <div
          class="bg-white rounded-lg shadow-xl w-full sm:max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
          @click.stop
        >
          <!-- Header -->
          <div
            class="flex items-center justify-between p-4 border-b border-gray-200"
          >
            <h3 class="text-lg font-semibold">{{ $t('common.cropImage') }}</h3>
            <UButton
              icon="i-heroicons-x-mark"
              variant="ghost"
              color="neutral"
              @click="closeCropModal"
            />
          </div>

          <!-- Body -->
          <div class="p-4 overflow-auto flex-1">
            <div
              ref="cropContainer"
              class="relative w-full bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center"
              style="min-height: 400px; max-height: 600px"
            >
              <img
                v-if="cropImageSrc"
                ref="cropImage"
                :src="cropImageSrc"
                style="
                  display: block;
                  max-width: 100%;
                  max-height: 100%;
                  width: auto;
                  height: 379px;
                  object-fit: contain;
                "
                @load="initCrop"
              />
              <div
                v-if="showCropArea"
                ref="cropArea"
                class="absolute border-2 border-gray-700 cursor-move"
                style="background-color: rgba(55, 65, 81, 0.4)"
                :style="cropAreaStyle"
                @mousedown="startCropDrag"
                @touchstart="startCropDrag"
              >
                <div
                  class="absolute inset-0 flex items-center justify-center text-white text-xs font-medium"
                >
                  {{ $t('common.dragToMove') }}
                </div>
                <!-- Resize handles -->
                <div
                  class="absolute w-4 h-4 bg-gray-700 border-2 border-white rounded-full cursor-nwse-resize"
                  style="top: -6px; left: -6px"
                  @mousedown.stop="(e) => startResize('nw', e)"
                  @touchstart.stop="(e) => startResize('nw', e)"
                />
                <div
                  class="absolute w-4 h-4 bg-gray-700 border-2 border-white rounded-full cursor-nesw-resize"
                  style="top: -6px; right: -6px"
                  @mousedown.stop="(e) => startResize('ne', e)"
                  @touchstart.stop="(e) => startResize('ne', e)"
                />
                <div
                  class="absolute w-4 h-4 bg-gray-700 border-2 border-white rounded-full cursor-nwse-resize"
                  style="bottom: -6px; right: -6px"
                  @mousedown.stop="(e) => startResize('se', e)"
                  @touchstart.stop="(e) => startResize('se', e)"
                />
                <div
                  class="absolute w-4 h-4 bg-gray-700 border-2 border-white rounded-full cursor-nesw-resize"
                  style="bottom: -6px; left: -6px"
                  @mousedown.stop="(e) => startResize('sw', e)"
                  @touchstart.stop="(e) => startResize('sw', e)"
                />
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="flex justify-end gap-2 p-4 border-t border-gray-200">
            <UButton
              variant="ghost"
              color="neutral"
              :label="$t('common.cancel')"
              @click="closeCropModal"
            />
            <UButton
              color="primary"
              :label="$t('common.confirm')"
              @click="applyCrop"
            />
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
})

import { computed, nextTick, ref, onMounted, onUnmounted } from 'vue'
import { UButton } from '#components'
import type { StepperItem } from '@nuxt/ui'
import type {
  CompanyAddUpdateEntity,
  CompanyEntity,
  VietQRBusinessResponse,
} from '~/entities/company'
import type { JobModelAddUpdate } from '~/models/job'
import { CalendarDate, type DateValue } from '@internationalized/date'
import RichTextEditor from '~/components/RichTextEditor.vue'
import { handleMstInput } from '~/utils/mst'
import {
  resolveCompanySizeForSelect,
} from '~/constants/company-size'
import { normalizeCompanyLogo } from '~/utils/companyLogo'
import { IMAGE_UPLOAD_ACCEPT, validateImageUploadFile } from '~/utils/imageUploadValidation'
import { OrganizationType } from '~/enums/master-data'

/** Loại hình tổ chức mặc định khi ẩn field trên form free-post (Khác). */
const DEFAULT_COMPANY_ORGANIZATION_TYPE = OrganizationType.khac
const { t } = useI18n()
const { calculatePosition: vueSelectCalculatePosition } = useVueSelectFixedPosition()

useHead({
  title: computed(() => t('job.uploadJob.title')),
})
const wizardStep = ref(0)

const step2BasicOpen = ref(true)
const step2CandidateOpen = ref(true)
const step2ContactOpen = ref(true)

// Scroll lock for vue-select — chặn scroll nền, giữ gutter để không giật layout
const vSelectOpenCount = ref(0)
let scrollLockSnapshot: {
  paddingRight: string
  scrollY: number
} | null = null

const setVSelectScrollLock = (locked: boolean) => {
  if (typeof document === 'undefined') return
  const body = document.body
  const docEl = document.documentElement

  if (locked) {
    if (body.classList.contains('vselect-scroll-lock')) return
    const scrollbarWidth = Math.max(0, window.innerWidth - docEl.clientWidth)
    scrollLockSnapshot = {
      paddingRight: body.style.paddingRight,
      scrollY: window.scrollY,
    }
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`
    }
    body.classList.add('vselect-scroll-lock')
    return
  }

  if (!body.classList.contains('vselect-scroll-lock')) return
  body.classList.remove('vselect-scroll-lock')
  if (scrollLockSnapshot) {
    body.style.paddingRight = scrollLockSnapshot.paddingRight
    window.scrollTo(0, scrollLockSnapshot.scrollY)
    scrollLockSnapshot = null
  }
}

const onMultiSelectOpen = () => {
  vSelectOpenCount.value += 1
  if (vSelectOpenCount.value === 1) setVSelectScrollLock(true)
}

const onMultiSelectClose = () => {
  vSelectOpenCount.value = Math.max(0, vSelectOpenCount.value - 1)
  if (vSelectOpenCount.value === 0) setVSelectScrollLock(false)
}

/** UInput / USelect / UButton: viền đỏ khi lỗi (ring nằm ở `ui.base`, không ăn từ `class` bên ngoài). */
function fieldErrorRingClass(errorMsg: string | undefined | null) {
  return errorMsg ? ' !ring-1 !ring-inset !ring-red-500' : ''
}

// Removed tabs - only MST lookup now

// Enum
const {
  categoryItemsSearchable,
  employmentTypeItems,
  experienceLevelItems,
  locationItemsWithoutAll,
  jobBenefitsItems,
  salaryTypeItems,
  salaryPeriodItems,
  requiredQualificationItems,
  genderItems,
  gradeItems,
} = useJobFilters()

const currencyItems = [
  { label: 'VND (₫)', value: 'VND' },
  { label: 'USD ($)', value: 'USD' },
]

const salaryRateTypeItems = [
  { label: 'Net (Take-home / Sau thuế)', value: 'Net' },
  { label: 'Gross (Before tax / Trước thuế)', value: 'Gross' },
]

const workModeOptions = [
  { label: 'On-site (Tại trường / Cơ sở)', value: 'On-site' },
  { label: 'Hybrid (Kết hợp On-site & Online)', value: 'Hybrid' },
  { label: 'Online / Remote (Dạy trực tuyến)', value: 'Online' },
]

const nationalityPreferenceOptions = [
  { label: 'Native English Speakers Only (UK, US, Canada, Aus, NZ, Ireland, SA)', value: 'Native Only' },
  { label: 'Native Preferred (Open to Non-Native with C1 / IELTS 7.5+)', value: 'Native Preferred' },
  { label: 'Open to All Nationalities (Filipino, European, Asian with C1)', value: 'Open to All' },
  { label: 'No Nationality Preference', value: 'No Preference' },
]

const teachingCertificateOptions = [
  { label: 'TEFL Certificate (120+ Hours)', value: 'TEFL 120h' },
  { label: 'TESOL Certificate', value: 'TESOL' },
  { label: 'CELTA (Cambridge)', value: 'CELTA' },
  { label: 'DELTA / Trinity DipTESOL', value: 'DELTA' },
  { label: 'Home Country Teaching License / QTS / PGCE', value: 'Teaching License' },
  { label: 'Degree in Education (Bằng Sư phạm)', value: 'Education Degree' },
  { label: 'IELTS 7.5+ / CEFR C1 Certificate', value: 'C1/IELTS' },
]

// State for new and refined fields
const isNegotiable = ref(false)
const jobCurrency = ref('VND')
const jobSalaryPeriod = ref<number>(1)
const jobSalaryRateType = ref('Net')
const jobWorkMode = ref('On-site')
const jobVacancies = ref<number | undefined>(1)
const jobStartDate = ref('')
const jobContractLength = ref('')
const jobWorkingSchedule = ref('')
const jobNationalityPreference = ref('Native Preferred')

const onNegotiableChange = () => {
  if (isNegotiable.value) {
    jobErrors.value.salaryMin = ''
    jobErrors.value.salaryMax = ''
  }
}

const requiredQualificationSelectItems = computed(() =>
  [...requiredQualificationItems.value].sort((a, b) =>
    a.label.localeCompare(b.label, 'vi', { sensitivity: 'base' }),
  ),
)

const employmentTypeSelectItems = computed(() =>
  employmentTypeItems.value.map((item) => ({
    label: item.label,
    value: String(item.value),
  })),
)

const gradeSelectItems = computed(() =>
  gradeItems.value.map((item) => ({
    label: item.label,
    value: String(item.value),
  })),
)

const jobBenefitsSelectItems = computed(() =>
  [...jobBenefitsItems.value].sort((a, b) =>
    a.label.localeCompare(b.label, 'vi', { sensitivity: 'base' }),
  ),
)

/** Tỉnh/thành: "Toàn Quốc" đầu list, ưu tiên các trung tâm lớn (TP.HCM, Hà Nội, Đà Nẵng, Hải Phòng), sau đó sort A→Z phần còn lại. */
const locationSelectItems = computed(() => {
  const items = locationItemsWithoutAll.value
  const nationwide = items.find((item) => item.value === '0')
  const provinces = items.filter((item) => item.value !== '0')

  // Top priority teaching hubs: 29: TP.HCM, 12: Hà Nội, 21: Đà Nẵng, 13: Hải Phòng
  const priorityIds = ['29', '12', '21', '13']
  const priorityList: typeof provinces = []

  for (const pid of priorityIds) {
    const found = provinces.find((p) => p.value === pid)
    if (found) priorityList.push(found)
  }

  const remaining = provinces
    .filter((p) => !priorityIds.includes(p.value))
    .sort((a, b) => a.label.localeCompare(b.label, 'vi', { sensitivity: 'base' }))

  const result: typeof provinces = []
  if (nationwide) result.push(nationwide)
  result.push(...priorityList)
  result.push(...remaining)
  return result
})

// Computed properties for USelectMenu (convert between string[] and object[])
const categoryForSelect = computed({
  get: () => {
    if (!job.value.category || !Array.isArray(job.value.category)) return []

    return job.value.category
      .filter(c => c)
      .map(c => {
        const value = typeof c === 'object' && c !== null && 'value' in c ? (c as { value: string }).value : String(c)

        return categoryItemsSearchable.value.find(item => item.value === value) || { label: value, value }
      })
  },
  set: (val: any[]) => {
    job.value.category = val
      ? val.map(v => typeof v === 'object' && v !== null && 'value' in v ? (v as { value: string }).value : String(v))
      : []
  }
})

const locationForSelect = computed({
  get: () => {
    if (!job.value.location || !Array.isArray(job.value.location)) return []

    return job.value.location
      .filter(l => l)
      .map(l => {
        const value = typeof l === 'object' && l !== null && 'value' in l ? (l as { value: string }).value : String(l)

        return locationSelectItems.value.find(item => item.value === value) || { label: value, value }
      })
  },
  set: (val: any[]) => {
    job.value.location = val
      ? val.map(v => typeof v === 'object' && v !== null && 'value' in v ? (v as { value: string }).value : String(v))
      : []
  }
})

// Computed property for v-select benefits (convert between string[] and object[])
const benefitsForSelect = computed({
  get: () => {
    if (!job.value.benefits || !Array.isArray(job.value.benefits)) return []

    return job.value.benefits
      .filter(b => b)
      .map(b => {
        const value = typeof b === 'object' && b !== null && 'value' in b ? (b as { value: string }).value : String(b)

        return jobBenefitsSelectItems.value.find(item => item.value === value) || { label: value, value }
      })
  },
  set: (val: any[]) => {
    job.value.benefits = val
      ? val.map(v => typeof v === 'object' && v !== null && 'value' in v ? (v as { value: string }).value : String(v))
      : []
  }
})

// Computed property for v-select required qualification (convert between string[] and object[])
const requiredQualificationForSelect = computed({
  get: () => {
    if (
      !job.value.requiredQualification ||
      !Array.isArray(job.value.requiredQualification)
    ) {
      return []
    }

    return job.value.requiredQualification
      .filter((q) => q)
      .map((q) => {
        const value =
          typeof q === 'object' && q !== null && 'value' in q
            ? (q as { value: string }).value
            : String(q)

        return (
          requiredQualificationSelectItems.value.find((item) => item.value === value) || {
            label: value,
            value,
          }
        )
      })
  },
  set: (val: any[]) => {
    job.value.requiredQualification = val
      ? val.map((v) =>
          typeof v === 'object' && v !== null && 'value' in v
            ? (v as { value: string }).value
            : String(v),
        )
      : []
  },
})

// Computed property for v-select typeOfEmployment (convert between string[] and object[])
const typeOfEmploymentForSelect = computed({
  get: () => {
    if (!job.value.typeOfEmployment) return []
    const raw = Array.isArray(job.value.typeOfEmployment)
      ? job.value.typeOfEmployment
      : String(job.value.typeOfEmployment).split(',').map((s) => s.trim()).filter(Boolean)

    return raw.map((val) => {
      const v = typeof val === 'object' && val !== null && 'value' in val
        ? (val as { value: string }).value
        : String(val)
      return employmentTypeSelectItems.value.find((item) => item.value === v) || { label: v, value: v }
    })
  },
  set: (val: any[]) => {
    job.value.typeOfEmployment = val
      ? val.map((v) =>
          typeof v === 'object' && v !== null && 'value' in v
            ? String((v as { value: string }).value)
            : String(v),
        )
      : []
  },
})

// Computed property for v-select grade (convert between string[] and object[])
const gradeForSelect = computed({
  get: () => {
    if (!job.value.grade) return []
    const raw = Array.isArray(job.value.grade)
      ? job.value.grade
      : String(job.value.grade).split(',').map((s) => s.trim()).filter(Boolean)

    return raw.map((val) => {
      const v = typeof val === 'object' && val !== null && 'value' in val
        ? (val as { value: string }).value
        : String(val)
      return gradeSelectItems.value.find((item) => item.value === v) || { label: v, value: v }
    })
  },
  set: (val: any[]) => {
    job.value.grade = val
      ? val.map((v) =>
          typeof v === 'object' && v !== null && 'value' in v
            ? String((v as { value: string }).value)
            : String(v),
        )
      : []
  },
})

// Computed property for v-select gender (convert between string[] and object[])
const genderForSelect = computed({
  get: () => {
    if (!job.value.gender || !Array.isArray(job.value.gender) || job.value.gender.length === 0) {
      const anyOpt = genderItems.value.find(item => item.value === '0')
      return anyOpt ? [anyOpt] : []
    }

    return job.value.gender
      .filter(g => g !== undefined && g !== null)
      .map(g => {
        const value = typeof g === 'object' && g !== null && 'value' in g ? (g as { value: string }).value : String(g)

        return genderItems.value.find(item => item.value === value) || { label: value, value }
      })
  },
  set: (val: any[]) => {
    job.value.gender = val
      ? val.map(v => typeof v === 'object' && v !== null && 'value' in v ? (v as { value: string }).value : String(v))
      : ['0']
  }
})

// Computed property for v-select teaching certificates
const jobCertificates = ref<string[]>([])
const certificatesForSelect = computed({
  get: () => {
    return jobCertificates.value.map((val) => {
      const v = typeof val === 'object' && val !== null && 'value' in val ? (val as any).value : String(val)
      return teachingCertificateOptions.find((item) => item.value === v) || { label: v, value: v }
    })
  },
  set: (val: any[]) => {
    jobCertificates.value = val
      ? val.map((v) => typeof v === 'object' && v !== null && 'value' in v ? (v as any).value : String(v))
      : []
  },
})

/** Logo state (REQUIRED) */
const logoFileEl = ref<HTMLInputElement | null>(null)
const logoFile = ref<File | null>(null)
const logoPreview = ref<string | null>(null)
const isDraggingLogo = ref(false)

/** Banner image state */
const bannerFileEl = ref<HTMLInputElement | null>(null)
const bannerFile = ref<File | null>(null)
const bannerPreview = ref<string | null>(null)
const isDraggingBanner = ref(false)

/** Crop modal state */
const showCropModal = ref(false)
const cropImageSrc = ref<string | null>(null)
const cropContainer = ref<HTMLElement | null>(null)
const cropImage = ref<HTMLImageElement | null>(null)
const cropArea = ref<HTMLElement | null>(null)
const showCropArea = ref(false)
const cropAreaStyle = ref({
  left: '10%',
  top: '10%',
  width: '80%',
  height: '80%',
})
const cropData = ref({
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  imageWidth: 0,
  imageHeight: 0,
  containerWidth: 0,
  containerHeight: 0,
})
const isDragging = ref(false)
const isResizing = ref(false)
const resizeDirection = ref('')
const dragStart = ref({ x: 0, y: 0 })
const cropAreaStart = ref({ left: 0, top: 0, width: 0, height: 0 })

function onDragEnterLogo() {
  isDraggingLogo.value = true
}
function onDragLeaveLogo() {
  isDraggingLogo.value = false
}

function onDropLogo(e: DragEvent) {
  isDraggingLogo.value = false
  const files = e.dataTransfer?.files

  if (!files?.length) return

  const file = files[0]
  if (!file) return

  const validationError = validateImageUploadFile(file)
  if (validationError) {
    useNotify({ type: 'error', message: validationError })
    return
  }

  setLogoFile(file)
}

function onPickLogo(e: Event) {
  const files = (e.target as HTMLInputElement).files

  if (!files?.length) return

  const file = files[0]
  if (!file) return

  const validationError = validateImageUploadFile(file)
  if (validationError) {
    useNotify({ type: 'error', message: validationError })
    if (logoFileEl.value) logoFileEl.value.value = ''
    return
  }

  setLogoFile(file)
  if (logoFileEl.value) logoFileEl.value.value = ''
}

function setLogoFile(file: File) {
  // Revoke old preview URL if exists
  if (logoPreview.value?.startsWith('blob:')) {
    URL.revokeObjectURL(logoPreview.value)
  }
  logoFile.value = file
  logoPreview.value = URL.createObjectURL(file)
}

function removeLogo() {
  if (logoPreview.value?.startsWith('blob:')) {
    URL.revokeObjectURL(logoPreview.value)
  }
  logoFile.value = null
  logoPreview.value = null
}

function openCropModal() {
  if (!logoFile.value) return

  // Create a new FileReader to read the file
  const reader = new FileReader()

  reader.onload = (e) => {
    cropImageSrc.value = e.target?.result as string
    showCropModal.value = true
  }
  reader.readAsDataURL(logoFile.value)
}

function closeCropModal() {
  showCropModal.value = false
  cropImageSrc.value = null
  showCropArea.value = false
}

function initCrop() {
  if (!cropImage.value || !cropContainer.value) return

  nextTick(() => {
    const img = cropImage.value!
    const container = cropContainer.value!
    const containerRect = container.getBoundingClientRect()
    const imgRect = img.getBoundingClientRect()

    // Calculate initial crop area (80% of image, centered)
    const cropWidth = imgRect.width * 0.8
    const cropHeight = imgRect.height * 0.8
    const cropLeft =
      imgRect.left - containerRect.left + (imgRect.width - cropWidth) / 2
    const cropTop =
      imgRect.top - containerRect.top + (imgRect.height - cropHeight) / 2

    cropAreaStyle.value = {
      left: `${(cropLeft / containerRect.width) * 100}%`,
      top: `${(cropTop / containerRect.height) * 100}%`,
      width: `${(cropWidth / containerRect.width) * 100}%`,
      height: `${(cropHeight / containerRect.height) * 100}%`,
    }

    cropData.value = {
      x: cropLeft,
      y: cropTop,
      width: cropWidth,
      height: cropHeight,
      imageWidth: imgRect.width,
      imageHeight: imgRect.height,
      containerWidth: containerRect.width,
      containerHeight: containerRect.height,
    }

    showCropArea.value = true
  })
}

function startCropDrag(e: MouseEvent | TouchEvent) {
  e.preventDefault()
  e.stopPropagation()

  if (!cropContainer.value || !cropArea.value) return

  isDragging.value = true
  const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
  const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY

  const containerRect = cropContainer.value.getBoundingClientRect()
  const areaRect = cropArea.value.getBoundingClientRect()

  dragStart.value = { x: clientX, y: clientY }
  cropAreaStart.value = {
    left: areaRect.left - containerRect.left,
    top: areaRect.top - containerRect.top,
    width: areaRect.width,
    height: areaRect.height,
  }

  document.addEventListener('mousemove', handleCropDrag, { passive: false })
  document.addEventListener('mouseup', stopCropDrag)
  document.addEventListener('touchmove', handleCropDrag, { passive: false })
  document.addEventListener('touchend', stopCropDrag)
}

function handleCropDrag(e: MouseEvent | TouchEvent) {
  if (!isDragging.value || !cropContainer.value) return

  e.preventDefault()
  e.stopPropagation()

  const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
  const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY

  const deltaX = clientX - dragStart.value.x
  const deltaY = clientY - dragStart.value.y

  const containerRect = cropContainer.value.getBoundingClientRect()

  let newLeft = cropAreaStart.value.left + deltaX
  let newTop = cropAreaStart.value.top + deltaY

  // Constrain to container bounds
  newLeft = Math.max(
    0,
    Math.min(containerRect.width - cropAreaStart.value.width, newLeft),
  )
  newTop = Math.max(
    0,
    Math.min(containerRect.height - cropAreaStart.value.height, newTop),
  )

  cropAreaStyle.value = {
    ...cropAreaStyle.value,
    left: `${(newLeft / containerRect.width) * 100}%`,
    top: `${(newTop / containerRect.height) * 100}%`,
  }
}

function stopCropDrag(e?: MouseEvent | TouchEvent) {
  if (e) {
    e.preventDefault()
    e.stopPropagation()
  }

  isDragging.value = false
  document.removeEventListener('mousemove', handleCropDrag)
  document.removeEventListener('mouseup', stopCropDrag)
  document.removeEventListener('touchmove', handleCropDrag)
  document.removeEventListener('touchend', stopCropDrag)
}

function startResize(direction: string, e: MouseEvent | TouchEvent) {
  e.preventDefault()
  e.stopPropagation()

  if (!cropContainer.value || !cropArea.value) return

  isResizing.value = true
  resizeDirection.value = direction

  const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
  const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY

  const containerRect = cropContainer.value.getBoundingClientRect()
  const areaRect = cropArea.value.getBoundingClientRect()

  dragStart.value = { x: clientX, y: clientY }
  cropAreaStart.value = {
    left: areaRect.left - containerRect.left,
    top: areaRect.top - containerRect.top,
    width: areaRect.width,
    height: areaRect.height,
  }

  document.addEventListener('mousemove', handleResize, { passive: false })
  document.addEventListener('mouseup', stopResize)
  document.addEventListener('touchmove', handleResize, { passive: false })
  document.addEventListener('touchend', stopResize)
}

function handleResize(e: MouseEvent | TouchEvent) {
  if (!isResizing.value || !cropContainer.value) return

  e.preventDefault()
  e.stopPropagation()

  const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
  const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY

  const deltaX = clientX - dragStart.value.x
  const deltaY = clientY - dragStart.value.y

  const containerRect = cropContainer.value.getBoundingClientRect()

  let newLeft = cropAreaStart.value.left
  let newTop = cropAreaStart.value.top
  let newWidth = cropAreaStart.value.width
  let newHeight = cropAreaStart.value.height

  const minSize = 50

  // Handle resize based on direction
  if (resizeDirection.value === 'n') {
    // Resize from top
    newHeight = Math.max(minSize, cropAreaStart.value.height - deltaY)
    newTop = cropAreaStart.value.top + (cropAreaStart.value.height - newHeight)
  } else if (resizeDirection.value === 's') {
    // Resize from bottom
    newHeight = Math.max(
      minSize,
      Math.min(
        containerRect.height - cropAreaStart.value.top,
        cropAreaStart.value.height + deltaY,
      ),
    )
  } else if (resizeDirection.value === 'w') {
    // Resize from left
    newWidth = Math.max(minSize, cropAreaStart.value.width - deltaX)
    newLeft = cropAreaStart.value.left + (cropAreaStart.value.width - newWidth)
  } else if (resizeDirection.value === 'e') {
    // Resize from right
    newWidth = Math.max(
      minSize,
      Math.min(
        containerRect.width - cropAreaStart.value.left,
        cropAreaStart.value.width + deltaX,
      ),
    )
  } else if (resizeDirection.value === 'nw') {
    // Resize from top-left corner
    newWidth = Math.max(minSize, cropAreaStart.value.width - deltaX)
    newHeight = Math.max(minSize, cropAreaStart.value.height - deltaY)
    newLeft = cropAreaStart.value.left + (cropAreaStart.value.width - newWidth)
    newTop = cropAreaStart.value.top + (cropAreaStart.value.height - newHeight)
  } else if (resizeDirection.value === 'ne') {
    // Resize from top-right corner
    newWidth = Math.max(
      minSize,
      Math.min(
        containerRect.width - cropAreaStart.value.left,
        cropAreaStart.value.width + deltaX,
      ),
    )
    newHeight = Math.max(minSize, cropAreaStart.value.height - deltaY)
    newTop = cropAreaStart.value.top + (cropAreaStart.value.height - newHeight)
  } else if (resizeDirection.value === 'se') {
    // Resize from bottom-right corner
    newWidth = Math.max(
      minSize,
      Math.min(
        containerRect.width - cropAreaStart.value.left,
        cropAreaStart.value.width + deltaX,
      ),
    )
    newHeight = Math.max(
      minSize,
      Math.min(
        containerRect.height - cropAreaStart.value.top,
        cropAreaStart.value.height + deltaY,
      ),
    )
  } else if (resizeDirection.value === 'sw') {
    // Resize from bottom-left corner
    newWidth = Math.max(minSize, cropAreaStart.value.width - deltaX)
    newHeight = Math.max(
      minSize,
      Math.min(
        containerRect.height - cropAreaStart.value.top,
        cropAreaStart.value.height + deltaY,
      ),
    )
    newLeft = cropAreaStart.value.left + (cropAreaStart.value.width - newWidth)
  }

  // Constrain to container bounds
  if (newLeft < 0) {
    newWidth += newLeft
    newLeft = 0
    if (newWidth < minSize) {
      newWidth = minSize
      newLeft = cropAreaStart.value.left + cropAreaStart.value.width - minSize
    }
  }
  if (newTop < 0) {
    newHeight += newTop
    newTop = 0
    if (newHeight < minSize) {
      newHeight = minSize
      newTop = cropAreaStart.value.top + cropAreaStart.value.height - minSize
    }
  }
  if (newLeft + newWidth > containerRect.width) {
    newWidth = containerRect.width - newLeft
    if (newWidth < minSize) {
      newWidth = minSize
      newLeft = containerRect.width - minSize
    }
  }
  if (newTop + newHeight > containerRect.height) {
    newHeight = containerRect.height - newTop
    if (newHeight < minSize) {
      newHeight = minSize
      newTop = containerRect.height - minSize
    }
  }

  // Ensure minimum size
  if (newWidth < minSize) {
    newWidth = minSize
  }
  if (newHeight < minSize) {
    newHeight = minSize
  }

  cropAreaStyle.value = {
    left: `${(newLeft / containerRect.width) * 100}%`,
    top: `${(newTop / containerRect.height) * 100}%`,
    width: `${(newWidth / containerRect.width) * 100}%`,
    height: `${(newHeight / containerRect.height) * 100}%`,
  }
}

function stopResize(e?: MouseEvent | TouchEvent) {
  if (e) {
    e.preventDefault()
    e.stopPropagation()
  }

  isResizing.value = false
  resizeDirection.value = ''
  document.removeEventListener('mousemove', handleResize)
  document.removeEventListener('mouseup', stopResize)
  document.removeEventListener('touchmove', handleResize)
  document.removeEventListener('touchend', stopResize)
}

async function applyCrop() {
  if (
    !cropImageSrc.value ||
    !cropImage.value ||
    !cropArea.value ||
    !cropContainer.value
  )
    return

  try {
    // Create a new image to get actual dimensions
    const img = new Image()

    img.src = cropImageSrc.value

    await new Promise((resolve) => {
      img.onload = resolve
    })

    const areaRect = cropArea.value.getBoundingClientRect()
    const imgRect = cropImage.value.getBoundingClientRect()

    // Calculate crop coordinates relative to the actual image
    const scaleX = img.naturalWidth / imgRect.width
    const scaleY = img.naturalHeight / imgRect.height

    const cropX = (areaRect.left - imgRect.left) * scaleX
    const cropY = (areaRect.top - imgRect.top) * scaleY
    const cropWidth = areaRect.width * scaleX
    const cropHeight = areaRect.height * scaleY

    // Use ImageBitmap API to crop (no canvas needed)
    const croppedBlob = await cropImageUsingImageBitmap(
      cropImageSrc.value,
      cropX,
      cropY,
      cropWidth,
      cropHeight,
    )

    // Create a new File from the cropped blob
    const croppedFile = new File(
      [croppedBlob],
      logoFile.value?.name || 'logo.png',
      {
        type: logoFile.value?.type || 'image/png',
      },
    )

    // Update logo file and preview
    if (logoPreview.value?.startsWith('blob:')) {
      URL.revokeObjectURL(logoPreview.value)
    }

    logoFile.value = croppedFile
    logoPreview.value = URL.createObjectURL(croppedBlob)

    closeCropModal()
  } catch (error) {
    console.error('Error cropping image:', error)
    useNotify({
      message: 'An error occurred while cropping image. Please try again.',
    })
  }
}

// Helper function to crop image using ImageBitmap API (no direct canvas code)
async function cropImageUsingImageBitmap(
  imageSrc: string,
  x: number,
  y: number,
  width: number,
  height: number,
): Promise<Blob> {
  // Create image element
  const img = new Image()

  img.src = imageSrc

  await new Promise((resolve, reject) => {
    img.onload = resolve
    img.onerror = reject
  })

  // Create ImageBitmap from the image
  const bitmap = await createImageBitmap(img, x, y, width, height)

  // Convert ImageBitmap to Blob using OffscreenCanvas (no visible canvas)
  const offscreen = new OffscreenCanvas(width, height)
  const ctx = offscreen.getContext('2d')

  if (!ctx) {
    throw new Error('Could not get 2d context')
  }

  ctx.drawImage(bitmap, 0, 0)

  const blob = await offscreen.convertToBlob({ type: 'image/png' })

  bitmap.close()

  return blob
}

/** Company images state (OPTIONAL) */
const imagesFileEl = ref<HTMLInputElement | null>(null)
const imageFiles = ref<File[]>([])
const imagePreviews = ref<string[]>([])
const isDraggingImages = ref(false)

function onDragEnterImages() {
  isDraggingImages.value = true
}
function onDragLeaveImages() {
  isDraggingImages.value = false
}

function onDropImages(e: DragEvent) {
  isDraggingImages.value = false
  const files = e.dataTransfer?.files

  if (!files?.length) return
  addImageFiles(Array.from(files))
}

function onPickImages(e: Event) {
  const files = (e.target as HTMLInputElement).files

  if (!files?.length) return
  addImageFiles(Array.from(files))
  if (imagesFileEl.value) imagesFileEl.value.value = ''
}

function addImageFiles(files: File[]) {
  for (const f of files) {
    const validationError = validateImageUploadFile(f)
    if (validationError) {
      useNotify({ type: 'error', message: validationError })
      continue
    }
    imageFiles.value.push(f)
    imagePreviews.value.push(URL.createObjectURL(f))
  }
}

function removeImage(idx: number) {
  const pv = imagePreviews.value[idx]

  if (pv?.startsWith('blob:')) URL.revokeObjectURL(pv)
  imagePreviews.value.splice(idx, 1)
  imageFiles.value.splice(idx, 1)
}

// Banner image handlers
function onDragEnterBanner() {
  isDraggingBanner.value = true
}
function onDragLeaveBanner() {
  isDraggingBanner.value = false
}
function onDropBanner(e: DragEvent) {
  isDraggingBanner.value = false
  const files = e.dataTransfer?.files

  if (!files?.length) return
  const file = files[0]
  if (!file) return

  const validationError = validateImageUploadFile(file)
  if (validationError) {
    useNotify({ type: 'error', message: validationError })
    return
  }

  if (bannerPreview.value?.startsWith('blob:')) {
    URL.revokeObjectURL(bannerPreview.value)
  }
  bannerFile.value = file
  bannerPreview.value = URL.createObjectURL(file)
}
function onPickBanner(e: Event) {
  const input = e.target as HTMLInputElement
  const files = input.files

  if (!files?.length) return
  const file = files[0]
  if (!file) return

  const validationError = validateImageUploadFile(file)
  if (validationError) {
    useNotify({ type: 'error', message: validationError })
    input.value = ''
    return
  }

  if (bannerPreview.value?.startsWith('blob:')) {
    URL.revokeObjectURL(bannerPreview.value)
  }
  bannerFile.value = file
  bannerPreview.value = URL.createObjectURL(file)
  if (bannerFileEl.value) bannerFileEl.value.value = ''
}
function removeBanner() {
  if (bannerPreview.value?.startsWith('blob:')) {
    URL.revokeObjectURL(bannerPreview.value)
  }
  bannerFile.value = null
  bannerPreview.value = null
  companyAdd.value.bannerImage = null
}

onBeforeUnmount(() => {
  // Cleanup logo preview
  if (logoPreview.value?.startsWith('blob:')) {
    URL.revokeObjectURL(logoPreview.value)
  }
  // Cleanup banner preview
  if (bannerPreview.value?.startsWith('blob:')) {
    URL.revokeObjectURL(bannerPreview.value)
  }
  // Cleanup image previews
  imagePreviews.value.forEach((pv) => {
    if (pv?.startsWith('blob:')) URL.revokeObjectURL(pv)
  })
})

// Route
const router = useRouter()
const config = useRuntimeConfig()
const { $api } = useNuxtApp()
const authStore = useAuthStore()
const loading = ref(false)
const agreeChecked = ref(false)

// Confirm step states
type ConfirmStepState = 'incomplete' | 'success' | 'error'
const confirmStepState = ref<ConfirmStepState>('incomplete')
const job = ref<JobModelAddUpdate>({} as JobModelAddUpdate)

const companyAdd = ref<CompanyAddUpdateEntity>({
  id: undefined,
  name: '',
  mst: '',
  address: '',
  taxAddress: '',
  website: '',
  organizationType: DEFAULT_COMPANY_ORGANIZATION_TYPE,
  companySize: null,
  foundedYear: null,
  description: '',
  insight: '',
  overview: '',
  logo: '',
  facebookLink: '',
  twitterLink: '',
  instagramLink: '',
  linkedInLink: '',
  videoUrl: '',
  isWaiting: false,
  companyImages: [],
  bannerImage: null,
} as CompanyAddUpdateEntity)
const selectedCompany = ref<CompanyEntity | null>(null)
const companyByMST = ref<VietQRBusinessResponse | null>(null)

/** Validation errors */
const companyErrors = ref<Record<string, string>>({})
const jobErrors = ref<Record<string, string>>({})

// Initialize
onMounted(() => {
  // Nếu đã đăng nhập thì KHÔNG cho vào trang này: điều hướng về dashboard theo role
  if (authStore.user) {
    const userRole = authStore.user.role

    if (userRole === USER_ROLES.ADMIN) {
      if (config.public.adminUrl) {
        window.location.href = `${config.public.adminUrl}${ROUTE_PAGE.DASHBOARD.ADMIN}`
      } else {
        router.push(ROUTE_PAGE.DASHBOARD.ADMIN)
      }
      return
    }
    if (userRole === USER_ROLES.USER) {
      router.push(ROUTE_PAGE.DASHBOARD.USER)
      return
    }
    if (userRole === USER_ROLES.COMPANY) {
      router.push(ROUTE_PAGE.DASHBOARD.COMPANY + '?view=newJob')
      return
    }
  }

  // Cho phép người CHƯA đăng nhập sử dụng trang upload (free-post)
  job.value.postedDate = new Date()

  // No need to fetch all companies anymore
})

// Methods
const goBack = () => {
  router.back()
}

// Methods
const goToListJobUser = () => {
  router.push(ROUTE_PAGE.USER_JOB.LIST)
}

const mstCompany = ref('')
const schoolSearchQuery = ref('')
const isSearchDropdownOpen = ref(false)
const isSearchingSchools = ref(false)
const schoolSearchResults = ref<CompanyEntity[]>([])
const selectedSchool = ref<CompanyEntity | null>(null)
const isCreatingNewSchool = ref(false)
const schoolSearchContainerRef = ref<HTMLElement | null>(null)
let searchDebounceTimer: any = null

const logoErrorMap = ref<Record<number, boolean>>({})
const selectedSchoolLogoError = ref(false)

const onLogoError = (id: number) => {
  logoErrorMap.value[id] = true
}

const cleanHtml = (raw: string | null | undefined): string => {
  if (!raw) return ''
  return String(raw).replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
}

const getSchoolInitials = (name: string | null | undefined): string => {
  if (!name) return 'SC'
  const clean = name.replace(/^(công ty tnhh|công ty cp|công ty cổ phần|công ty trách nhiệm hữu hạn|hệ thống trường|trường)\s+/i, '').trim()
  const words = (clean || name).split(/\s+/).filter(Boolean)
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase()
  }
  return (name || 'SC').slice(0, 2).toUpperCase()
}

const clearSchoolSearch = () => {
  schoolSearchQuery.value = ''
  schoolSearchResults.value = []
  isSearchDropdownOpen.value = false
}

const handleDocumentClick = (e: MouseEvent) => {
  if (schoolSearchContainerRef.value && !schoolSearchContainerRef.value.contains(e.target as Node)) {
    isSearchDropdownOpen.value = false
  }
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('click', handleDocumentClick)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('click', handleDocumentClick)
  }
})

const onSearchSchoolInput = (e: any) => {
  const val = typeof e === 'string' ? e : e?.target?.value || ''
  schoolSearchQuery.value = val
  isSearchDropdownOpen.value = true

  if (searchDebounceTimer) clearTimeout(searchDebounceTimer)
  if (!val.trim()) {
    schoolSearchResults.value = []
    isSearchingSchools.value = false
    return
  }

  isSearchingSchools.value = true
  searchDebounceTimer = setTimeout(async () => {
    try {
      const res = await $api.company.searchCompany({ keyword: val.trim() })
      schoolSearchResults.value = Array.isArray(res) ? res : []
    } catch (err) {
      console.error('Failed to search schools:', err)
      schoolSearchResults.value = []
    } finally {
      isSearchingSchools.value = false
    }
  }, 250)
}

const onSearchInputFocus = () => {
  if (schoolSearchQuery.value.trim() && schoolSearchResults.value.length > 0) {
    isSearchDropdownOpen.value = true
  }
}

const onSearchEnterKey = () => {
  if (schoolSearchResults.value.length > 0) {
    selectSchool(schoolSearchResults.value[0])
  } else if (schoolSearchQuery.value.trim()) {
    startCreateNewSchool(schoolSearchQuery.value.trim())
  }
}

const selectSchool = (s: CompanyEntity) => {
  selectedSchool.value = s
  isExistCompany.value = true
  isDisplayInputCompany.value = true
  isAddCompany.value = false
  isCreatingNewSchool.value = false
  isSearchDropdownOpen.value = false
  schoolSearchQuery.value = s.name

  // Set company for job
  selectedCompany.value = s
  job.value.companyId = s.id

  if (!companyAdd.value) {
    companyAdd.value = {} as CompanyAddUpdateEntity
  }
  companyAdd.value.id = s.id
  companyAdd.value.name = s.name
  companyAdd.value.address = s.address || ''
  companyAdd.value.taxAddress = s.taxAddress || ''
  companyAdd.value.mst = s.mst || null
  companyAdd.value.logo = normalizeCompanyLogo(s.logo) || ''
  companyAdd.value.organizationType = s.organizationType ?? DEFAULT_COMPANY_ORGANIZATION_TYPE
  companyAdd.value.website = s.website || ''
}

const startCreateNewSchool = (name: string) => {
  selectedSchool.value = null
  isExistCompany.value = false
  isDisplayInputCompany.value = true
  isAddCompany.value = true
  isCreatingNewSchool.value = true
  isSearchDropdownOpen.value = false

  if (!companyAdd.value) {
    companyAdd.value = {} as CompanyAddUpdateEntity
  }
  companyAdd.value.id = undefined
  companyAdd.value.name = name.trim() || ''
  companyAdd.value.address = ''
  companyAdd.value.taxAddress = ''
  companyAdd.value.mst = ''
  companyAdd.value.logo = ''
  companyAdd.value.organizationType = DEFAULT_COMPANY_ORGANIZATION_TYPE
  companyAdd.value.website = ''
}

const resetSchoolSelection = () => {
  selectedSchool.value = null
  isCreatingNewSchool.value = false
  isDisplayInputCompany.value = false
  isExistCompany.value = false
  isAddCompany.value = false
  if (companyAdd.value) {
    companyAdd.value.id = undefined
  }
  job.value.companyId = undefined
  schoolSearchQuery.value = ''
  schoolSearchResults.value = []
  isSearchDropdownOpen.value = false
}

function onMstCompanyInput(event: Event) {
  handleMstInput(event, (value) => {
    mstCompany.value = value
  })
}

const isGettingCompanyByMst = ref(false)
const isAddCompany = ref(false)
const isExistCompany = ref(false)
const isDisplayInputCompany = ref(false)
const companyFieldsLookupHighlight = computed(
  () =>
    isDisplayInputCompany.value &&
    (isExistCompany.value || Boolean(companyByMST.value?.data)),
)

// Date picker for deadline
const parseDateString = (str: string | null): DateValue | null => {
  if (!str) return null
  const [year, month, day] = str.split('-').map(Number)

  if (!year || !month || !day) return null

  return new CalendarDate(year, month, day)
}

const formatDateToString = (date: DateValue | null): string => {
  if (!date) return ''

  const year = date.year
  const month = String(date.month).padStart(2, '0')
  const day = String(date.day).padStart(2, '0')

  return `${year}-${month}-${day}`
}

// Format currency with commas
const formatCurrency = (value: string | undefined | null): string => {
  if (!value) return ''

  // Remove all non-digit characters
  const numericValue = String(value).replace(/\D/g, '')

  if (!numericValue) return ''

  // Format with commas
  return Number(numericValue).toLocaleString('en-US')
}

// Unformat currency (remove commas)
const unformatCurrency = (value: string): string => {
  if (!value) return ''

  // Remove all non-digit characters
  return String(value).replace(/\D/g, '')
}

const formatDateDeadline = (dateStr: string): string => {
  if (!dateStr) return ''

  const date = new Date(dateStr)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}

// Calendar date binding
const isDeadlinePopoverOpen = ref(false)

const deadlineCalendarDate = computed({
  get: () => parseDateString(job.value.deadline || null),
  set: (val: DateValue | null) => {
    job.value.deadline = formatDateToString(val)
    if (val) {
      isDeadlinePopoverOpen.value = false
    }
  },
})

const {
  minDeadlineDate,
  maxDeadlineDate,
  isDeadlineDateHidden,
  isDeadlineTooEarly,
} = useJobDeadlineDate()

const findCompanyByMst = async () => {
  isGettingCompanyByMst.value = true
  loading.value = true
  isDisplayInputCompany.value = false
  isExistCompany.value = false

  // Reset logo and images when searching new company
  removeLogo()
  imageFiles.value.forEach((_, idx) => {
    if (imagePreviews.value[idx]?.startsWith('blob:')) {
      URL.revokeObjectURL(imagePreviews.value[idx])
    }
  })
  imageFiles.value = []
  imagePreviews.value = []

  try {
    if (!mstCompany.value || mstCompany.value.trim().length === 0) {
      useNotify({
        message: 'Please enter a tax ID to look up.',
      })

      return
    }

    // Step 1: Check if MST exists in database first
    let existingCompany: CompanyEntity | null = null

    try {
      // Try to get company from database by MST using checkExistMst endpoint
      existingCompany = await $api.company.checkExistMst(mstCompany.value)
    } catch (_error: any) {
      // If 404 or any error, company doesn't exist in DB
      console.log('Company not found in DB, trying VietQR lookup...')
      existingCompany = null
    }

    if (existingCompany) {
      // Company exists in DB - show readonly
      isExistCompany.value = true
      isDisplayInputCompany.value = true
      isAddCompany.value = false

      // Set company for job
      selectedCompany.value = existingCompany
      job.value.companyId = existingCompany.id

      // Fill form with existing data (readonly)
      if (!companyAdd.value) {
        companyAdd.value = {
          videoUrl: '',
          bannerImage: null,
        } as CompanyAddUpdateEntity
      }
      companyAdd.value.id = existingCompany.id ?? null
      companyAdd.value.name = existingCompany.name ?? ''
      companyAdd.value.address = existingCompany.address ?? ''
      companyAdd.value.taxAddress = existingCompany.taxAddress ?? ''
      companyAdd.value.mst = existingCompany.mst ?? null
      companyAdd.value.logo = normalizeCompanyLogo(existingCompany.logo) ?? ''
      companyAdd.value.organizationType =
        existingCompany.organizationType ?? DEFAULT_COMPANY_ORGANIZATION_TYPE
      companyAdd.value.facebookLink = existingCompany.facebookLink ?? ''
      companyAdd.value.twitterLink = existingCompany.twitterLink ?? ''
      companyAdd.value.linkedInLink = existingCompany.linkedInLink ?? ''
      companyAdd.value.website = existingCompany.website ?? ''
      companyAdd.value.companySize = resolveCompanySizeForSelect(existingCompany.companySize)
      companyAdd.value.foundedYear = existingCompany.foundedYear ?? null
      companyAdd.value.description = existingCompany.description ?? ''
      companyAdd.value.insight = existingCompany.insight ?? ''
      companyAdd.value.overview = existingCompany.overview ?? ''
      companyAdd.value.videoUrl = existingCompany.videoUrl ?? ''
      companyAdd.value.bannerImage = existingCompany.bannerImage ?? null
      // Load banner image preview if exists
      if (existingCompany.bannerImage) {
        bannerPreview.value = existingCompany.bannerImage
        bannerFile.value = null
      } else {
        bannerPreview.value = null
        bannerFile.value = null
      }
      companyAdd.value.companyImages = existingCompany.companyImages ?? []
    } else {
      // Company doesn't exist - lookup from VietQR
      isExistCompany.value = false

      try {
        const response = await $api.company.getCompanyByMst(mstCompany.value)

        if (response && response.code == '00') {
          isDisplayInputCompany.value = true
          companyByMST.value = response
          isAddCompany.value = true
          if (!companyAdd.value) {
            companyAdd.value = {
              videoUrl: '',
              bannerImage: null,
            } as CompanyAddUpdateEntity
          }

          // Fill data from VietQR
          companyAdd.value.name = companyByMST.value.data.name ?? ''
          companyAdd.value.address = ''
          companyAdd.value.taxAddress = companyByMST.value.data.address ?? '' // Địa chỉ thuế từ VietQR
          companyAdd.value.mst = companyByMST.value.data.id ?? ''

          // Init default data for new company
          companyAdd.value.logo = ''
          companyAdd.value.organizationType = DEFAULT_COMPANY_ORGANIZATION_TYPE
          companyAdd.value.isWaiting = true
          companyAdd.value.facebookLink = ''
          companyAdd.value.twitterLink = ''
          companyAdd.value.linkedInLink = ''
          companyAdd.value.website = ''
          companyAdd.value.companySize = null
          companyAdd.value.foundedYear = null
          companyAdd.value.description = ''
          companyAdd.value.insight = ''
          companyAdd.value.overview = ''
          companyAdd.value.companyImages = []
        } else {
          isDisplayInputCompany.value = false

          useNotify({
            message:
              'No school found with the provided tax ID.',
          })
        }
      } catch (vietQRError: any) {
        isDisplayInputCompany.value = false
        console.error('VietQR lookup failed:', vietQRError)
        useNotify({
          message:
            'No school found with the provided tax ID.',
        })
      }
    }
  } catch (error: any) {
    isDisplayInputCompany.value = false

    console.error('Get Company By Mst failed:', error)
    useNotify({
      message: Array.isArray(error.message) ? error.message[0] : error.message,
    })
  } finally {
    loading.value = false
    isGettingCompanyByMst.value = false
  }
}

const confirmCreateSchool = () => {
  if (selectedSchool.value && selectedSchool.value.id) {
    // School exists
    wizardStep.value = 1
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  if (isCreatingNewSchool.value) {
    // Validate new school
    if (!companyAdd.value?.name?.trim()) {
      useNotify({ message: 'Please enter school or institution name.' })
      return
    }
    if (!companyAdd.value?.address?.trim()) {
      useNotify({ message: 'Please enter school address.' })
      return
    }
    isAddCompany.value = true
    wizardStep.value = 1
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  useNotify({ message: 'Please select a school or add a new one to continue.' })
}

const goBackToCompanyStep = () => {
  wizardStep.value = 0
  if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
}

const addJob = async () => {
  // Validate job fields
  const isValidJob = validateJobFields()

  if (!isValidJob) {
    return
  }

  // If not check display msg
  if (!agreeChecked.value) {
    useNotify({ message: 'Please agree to the Terms of Service and Privacy Policy.' })

    return
  }

  loading.value = true
  let isAddCompanySuccess = false
  let isAddJobSuccess = false

  // Check add Company
  if (isAddCompany.value && companyAdd.value) {
    // Public flow: không đụng tới ảnh; chỉ validate các trường text/số cần thiết
    const isValidCompany = validateCompanyFields()

    if (!isValidCompany) {
      loading.value = false

      return
    }

    // Public flow: không upload ảnh, không tạo company tại FE
    isAddCompanySuccess = true
  } else {
    isAddCompanySuccess = true
  }

  // Add job via public free-post
  if (isAddCompanySuccess) {
    try {
      const payload = {
        email: job.value.email || '',
        companyId: companyAdd.value?.id || job.value.companyId || undefined,
        mst: companyAdd.value?.mst || mstCompany.value || undefined,
        company: {
          id: companyAdd.value?.id || job.value.companyId || undefined,
          name: companyAdd.value?.name || '',
          mst: companyAdd.value?.mst || mstCompany.value || '',
          address: companyAdd.value?.address || '',
          taxAddress: companyAdd.value?.taxAddress || '',
          organizationType:
            companyAdd.value?.organizationType ?? DEFAULT_COMPANY_ORGANIZATION_TYPE,
          website: companyAdd.value?.website || '',
        },
        job: {
          title: job.value.title,
          detailDescription: job.value.detailDescription ?? '',
          category: Array.isArray(job.value.category)
            ? job.value.category.filter(Boolean).map(String).join(',')
            : String(job.value.category ?? ''),
          location: Array.isArray(job.value.location)
            ? job.value.location.filter(Boolean).map(String).join(',')
            : String(job.value.location ?? ''),
          typeOfEmployment: Array.isArray(job.value.typeOfEmployment)
            ? job.value.typeOfEmployment.filter(Boolean).map(String).join(',')
            : String(job.value.typeOfEmployment ?? ''),
          experienceLevel: job.value.experienceLevel ?? null,
          requiredQualification: Array.isArray(job.value.requiredQualification)
            ? job.value.requiredQualification.filter(Boolean).map(String).join(',')
            : String(job.value.requiredQualification ?? ''),
          gender: Array.isArray(job.value.gender)
            ? job.value.gender.filter(Boolean).map(String).join(',')
            : (job.value.gender as any) ?? null,
          grade: Array.isArray(job.value.grade)
            ? job.value.grade.filter(Boolean).map(String).join(',')
            : (job.value.grade != null ? String(job.value.grade) : null),
          postedDate: job.value.postedDate
            ? new Date(job.value.postedDate).toISOString()
            : new Date().toISOString(),
          deadline: new Date(job.value.deadline as any).toISOString(),
          salaryMin:
            isNegotiable.value
              ? 0
              : Number(unformatCurrency(job.value.salaryMin as any) ?? 0),
          salaryMax:
            isNegotiable.value
              ? 0
              : Number(unformatCurrency(job.value.salaryMax as any) ?? 0),
          salaryType: isNegotiable.value ? 5 : Number(jobSalaryPeriod.value ?? 1),
          currency: jobCurrency.value || 'VND',
          salaryRateType: jobSalaryRateType.value || 'Net',
          phoneNumber: job.value.phoneNumber ?? '',
          email: job.value.email || '',
          address: job.value.address || '',
          benefits: Array.isArray(job.value.benefits)
            ? job.value.benefits.filter(Boolean).map(String).join(',')
            : String(job.value.benefits ?? ''),
          workMode: jobWorkMode.value || 'On-site',
          vacancies: jobVacancies.value ? Number(jobVacancies.value) : undefined,
          startDate: jobStartDate.value || undefined,
          contractLength: jobContractLength.value || undefined,
          workingSchedule: jobWorkingSchedule.value || undefined,
          nationalityPreference: jobNationalityPreference.value || undefined,
          certificates: Array.isArray(certificatesForSelect.value)
            ? certificatesForSelect.value.map(c => typeof c === 'object' && c !== null ? c.value : c).filter(Boolean).join(',')
            : undefined,
        },
      }

      const response = await $api.job.freePostPublic(payload as any)

      if (response?.success) {
        isAddJobSuccess = true

        const accessToken = response.access_token || (response as any)?.accessToken

        // User mới tạo trong flow free-post: tự đăng nhập và vào dashboard
        if (accessToken && response.user) {
          const token = useToken(CONSTANTS.COOKIE_TOKEN_OPTION as any)
          token.set(accessToken)
          authStore.setUser(response.user)

          useNotify({
            message: response.message || 'Job posted successfully!',
            type: 'success',
          })

          loading.value = false
          await router.push(
            response.redirectUrl || '/companies/dashboard?view=manageJobs',
          )
          return
        }

        useNotify({ message: response.message, type: 'success' })
      } else {
        throw new Error(response?.message || 'Failed to post job. Please try again.')
      }
    } catch (error: any) {
      console.error('Add job failed:', error)
      useNotify({
        message:
          Array.isArray(error?.message) ? error.message[0] : (error?.message || 'Failed to post job. Please try again.'),
      })
    }
  }

  loading.value = false
  if (isAddCompany.value && !isAddCompanySuccess) {
    confirmStepState.value = 'error'
    useNotify({
      message: 'Failed to register school. Please try again.',
    })

    return
  } else if (!isAddJobSuccess) {
    confirmStepState.value = 'error'
    useNotify({
      message: 'Failed to post job. Please try again.',
    })

    return
  }

  confirmStepState.value = 'success'

  // Free-post: đã mở dashboard ở tab mới; quay về trang chủ
  router.push(ROUTE_PAGE.HOME)
}

/** Helper function to scroll to first error field */
function scrollToFirstError(errors: Record<string, string>, fieldIdMap: Record<string, string>) {
  const firstErrorField = Object.keys(errors)[0]
  
  if (firstErrorField && fieldIdMap[firstErrorField]) {
    const elementId = fieldIdMap[firstErrorField]
    const element = document.getElementById(elementId) || 
                    document.querySelector(`[id="${elementId}"]`) ||
                    document.querySelector(`input[id*="${elementId}"], select[id*="${elementId}"], textarea[id*="${elementId}"]`)
    
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        // Focus the element if it's an input
        if (element instanceof HTMLInputElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement) {
          element.focus()
        }
      }, 100)
    }
  }
}

function validateCompanyFields(): boolean {
  companyErrors.value = {}

  let isValid = true

  // Free post: chỉ validate các trường bắt buộc hiển thị trên UI
  if (!companyAdd.value.name?.trim()) {
    companyErrors.value.name = t('company.form.errName')
    isValid = false
  }

  if (!isValid) {
    const companyFieldIdMap: Record<string, string> = {
      name: 'company-name',
    }

    // Display toast notification
    useNotify({
      type: 'error',
      message: 'Please fill in all required fields correctly.',
    })

    scrollToFirstError(companyErrors.value, companyFieldIdMap)
  }

  return isValid
}

function validateJobFields(): boolean {
  jobErrors.value = {}

  let isValid = true

  if (!job.value.title || job.value.title.trim().length === 0) {
    jobErrors.value.title = 'Job title is required.'
    isValid = false
  }

  const detailHtml = job.value.detailDescription || ''
  const cleanDetail = detailHtml.replace(/<[^>]*>/g, '').trim()

  if (cleanDetail.length === 0) {
    jobErrors.value.detailDescription = 'Job description is required.'
    isValid = false
  }

  if (!job.value.deadline) {
    jobErrors.value.deadline = 'Please select application deadline.'
    isValid = false
  } else if (isDeadlineTooEarly(job.value.deadline)) {
    jobErrors.value.deadline = 'Deadline cannot be earlier than today.'
    isValid = false
  }

  if (!job.value.category || (Array.isArray(job.value.category) && job.value.category.length === 0)) {
    jobErrors.value.category = 'Please select teaching subject.'
    isValid = false
  }

  if (
    !job.value.typeOfEmployment ||
    (Array.isArray(job.value.typeOfEmployment) && job.value.typeOfEmployment.length === 0) ||
    (typeof job.value.typeOfEmployment === 'string' && job.value.typeOfEmployment.trim().length === 0)
  ) {
    jobErrors.value.typeOfEmployment = 'Please select employment type.'
    isValid = false
  }

  if (!job.value.location) {
    jobErrors.value.location = 'Please select job location.'
    isValid = false
  }

  // Validate salary min/max only if NOT Negotiable
  if (!isNegotiable.value) {
    if (!jobSalaryPeriod.value) {
      jobErrors.value.salaryType = 'Please select salary frequency.'
      isValid = false
    }

    if (!job.value.salaryMin || unformatCurrency(job.value.salaryMin).trim() === '') {
      jobErrors.value.salaryMin = 'Please enter minimum salary.'
      isValid = false
    }
    if (!job.value.salaryMax || unformatCurrency(job.value.salaryMax).trim() === '') {
      jobErrors.value.salaryMax = 'Please enter maximum salary.'
      isValid = false
    }
  }

  // Address validation
  const cleanAddress = (job.value.address || '').trim()

  if (cleanAddress.length === 0) {
    jobErrors.value.address = 'Job location address is required.'
    isValid = false
  }

  if (isExistCompany.value && !job.value.companyId) {
    jobErrors.value.companyId = 'Please select a school.'
    isValid = false
  }

  // Email validation - required
  if (!job.value.email || job.value.email.trim().length === 0) {
    jobErrors.value.email = 'Email address is required.'
    isValid = false
  } else if (!/^\S+@\S+\.\S+$/.test(job.value.email.trim())) {
    jobErrors.value.email = 'Invalid email format.'
    isValid = false
  }

  // Phone number validation - required
  if (!job.value.phoneNumber || job.value.phoneNumber.trim().length === 0) {
    jobErrors.value.phoneNumber = 'Phone number is required.'
    isValid = false
  }

  // Required qualification validation - required
  if (
    !job.value.requiredQualification ||
    !Array.isArray(job.value.requiredQualification) ||
    job.value.requiredQualification.length === 0
  ) {
    jobErrors.value.requiredQualification = 'Please select required qualification.'
    isValid = false
  }

  // Experience level validation - required
  if (!job.value.experienceLevel || job.value.experienceLevel === 0) {
    jobErrors.value.experienceLevel = 'Please select experience level.'
    isValid = false
  }

  // Benefits validation - required
  if (!job.value.benefits || (Array.isArray(job.value.benefits) && job.value.benefits.length === 0)) {
    jobErrors.value.benefits = 'Please select at least one benefit.'
    isValid = false
  }

  // Gender validation - optional (no error check)

  // Grade validation - required
  if (
    !job.value.grade ||
    job.value.grade === 0 ||
    (Array.isArray(job.value.grade) && job.value.grade.length === 0) ||
    (typeof job.value.grade === 'string' && job.value.grade.trim().length === 0)
  ) {
    jobErrors.value.grade = 'Please select grade level.'
    isValid = false
  }

  // Validate length
  if (job.value.title && job.value.title.length > 255) {
    jobErrors.value.title = 'Job title cannot exceed 255 characters.'
    isValid = false
  }

  // Validate salary
  if (
    !isNegotiable.value &&
    job.value.salaryMin &&
    job.value.salaryMax &&
    Number(unformatCurrency(job.value.salaryMin)) > Number(unformatCurrency(job.value.salaryMax))
  ) {
    jobErrors.value.salaryMin = 'Minimum salary cannot exceed maximum salary.'
    isValid = false
  }

  if (!isValid) {
    const jobFieldIdMap: Record<string, string> = {
      title: 'job-title',
      detailDescription: 'job-detail-description',
      deadline: 'job-deadline',
      category: 'job-category',
      typeOfEmployment: 'job-type-employment',
      location: 'job-location',
      salaryType: 'job-salary-type',
      salaryMin: 'job-salary-min',
      salaryMax: 'job-salary-max',
      address: 'job-address',
      email: 'job-email',
      phoneNumber: 'job-phone',
      requiredQualification: 'job-required-qualification',
      experienceLevel: 'job-experience-level',
      benefits: 'job-benefit',
      gender: 'job-gender',
      grade: 'job-grade',
      companyId: 'company-name',
    }

    // Display toast notification
    useNotify({
      type: 'error',
      message: 'Please fill in all required fields correctly.',
    })

    scrollToFirstError(jobErrors.value, jobFieldIdMap)
  }

  return isValid
}
</script>

<style scoped>
:global(body.vselect-scroll-lock) {
  overflow: hidden !important;
  overscroll-behavior: none;
}

.page-job-upload :deep(.job-vselect .v-select .vs__dropdown-menu) {
  max-height: 200px;
  overflow-y: auto;
  z-index: 9999;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08);
  padding: 4px;
  margin-top: 6px;
}

:deep(.vs__no-options) {
  padding: 8px 12px !important;
  margin: 0 !important;
  text-align: center !important;
  font-size: 0 !important;
  color: transparent !important;
  line-height: 1.4 !important;
  user-select: none;
  background: transparent !important;
  border: none !important;

  &::after {
    content: "No results found";
    display: block;
    font-size: 13px !important;
    font-weight: 400 !important;
    color: #94a3b8 !important;
    letter-spacing: -0.01em;
    line-height: 1.4 !important;
  }
}

:deep(.vs__dropdown-option) {
  margin: 2px 6px;
  padding: 6px 8px;
  border-radius: 0.75rem;
  font-size: 0.75rem; /* text-xs */
  color: #1f2937;
  cursor: pointer;
}

:deep(.vs__dropdown-option:hover) {
  background-color: #f7f9fc;
}

:deep(.vs__dropdown-option--selected) {
  background-color: #e0f2fe;
  color: #1f2937;
}

:deep(.vs__dropdown-option--highlight) {
  background-color: #f7f9fc;
}

:deep(.vs__search::placeholder),
:deep(.vs__placeholder) {
  font-size: 0.875rem;
  color: var(--ui-text-dimmed);
}

/* Step 2 v-select: vue-select không merge class lên root — bọc .job-vselect ở ngoài */
.page-job-upload :deep(.job-vselect .v-select .vs__dropdown-toggle) {
  min-height: 44px;
  border-radius: 12px;
  border: 1px solid rgba(148, 163, 184, 0.55);
  padding: 4px 10px;
  background: #ffffff;
}

.page-job-upload :deep(.job-vselect .v-select.vs--open .vs__dropdown-toggle),
.page-job-upload :deep(.job-vselect .v-select .vs__dropdown-toggle:focus),
.page-job-upload :deep(.job-vselect .v-select .vs__dropdown-toggle:focus-within) {
  border-color: rgba(148, 163, 184, 0.55);
  box-shadow: none !important;
  outline: none !important;
}

.page-job-upload :deep(.job-vselect--error .v-select .vs__dropdown-toggle) {
  border-color: rgb(248 113 113);
  box-shadow: 0 0 0 1px rgba(248, 113, 113, 0.35);
}

.page-job-upload :deep(.job-vselect .v-select .vs__selected) {
  border-radius: 9999px;
  background: rgba(239, 246, 255, 0.9);
  border: 1px solid rgba(147, 197, 253, 0.85);
  color: #0f172a;
  font-size: 0.8125rem;
  line-height: 1rem;
  padding: 4px 10px;
  margin: 3px 6px 3px 0;
}

.page-job-upload :deep(.job-vselect .v-select .vs__search) {
  margin: 3px 0;
  font-size: 0.875rem;
  color: #0f172a;
}

.page-job-upload :deep(.job-vselect .v-select .vs__search:focus) {
  outline: none !important;
  box-shadow: none !important;
}

.page-job-upload :deep(.job-vselect .v-select .vs__actions) {
  padding-left: 6px;
}
</style>
