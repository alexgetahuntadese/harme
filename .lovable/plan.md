

# Student Performance Tracking and Career Suggestion Feature

## Overview

This feature will track student quiz performance across subjects, analyze their skills and abilities, and suggest suitable professional career tracks based on their strengths and weaknesses.

## Feature Components

### 1. Performance Data Structure

**New localStorage-based storage** (matching existing pattern in `sessionUtils.ts`):

```text
+---------------------------+
| student_performance       |
+---------------------------+
| - student_id (uuid)       |
| - student_name            |
| - created_at              |
+---------------------------+
         |
         v
+---------------------------+
| quiz_attempts             |
+---------------------------+
| - attempt_id              |
| - student_id              |
| - grade                   |
| - subject                 |
| - chapter                 |
| - difficulty              |
| - score (%)               |
| - correct_answers         |
| - total_questions         |
| - time_spent              |
| - attempted_at            |
+---------------------------+
         |
         v
+---------------------------+
| skill_analysis            |
+---------------------------+
| - subject_scores          |
| - difficulty_performance  |
| - improvement_trend       |
| - strengths[]             |
| - weaknesses[]            |
+---------------------------+
```

### 2. New Pages

| Page | Route | Description |
|------|-------|-------------|
| Performance Dashboard | `/performance` | Main dashboard showing overall stats, charts, and career suggestions |
| Student Profile Setup | `/profile` | Initial setup for student name and preferences |

### 3. New Components

| Component | Purpose |
|-----------|---------|
| `PerformanceChart.tsx` | Subject-wise performance radar/bar chart using Recharts |
| `SkillAnalysis.tsx` | Display strengths and weaknesses with visual indicators |
| `CareerSuggestions.tsx` | AI-generated career recommendations based on performance |
| `PerformanceHistory.tsx` | List of past quiz attempts with filtering |
| `ProgressOverTime.tsx` | Line chart showing improvement trends |
| `SubjectBreakdown.tsx` | Detailed view of performance per subject |

### 4. Career Mapping Logic

**Subject-to-Career Mapping:**

```text
STEM Careers (Engineering, Medicine, Research):
- High scores in: Mathematics, Physics, Chemistry, Biology

Technology Careers (Software, IT, Data Science):
- High scores in: Mathematics, IT, Physics

Healthcare Careers (Doctor, Nurse, Pharmacist):
- High scores in: Biology, Chemistry, English

Agricultural Sciences (Agronomist, Food Scientist):
- High scores in: Agriculture, Biology, Chemistry

Social Sciences (Law, Teaching, Journalism):
- High scores in: History, Civics, English, Geography

Business & Economics:
- High scores in: Mathematics, English, Civics
```

### 5. Performance Calculation Formulas

- **Subject Score**: Weighted average of quiz scores (recent attempts weighted higher)
- **Skill Level**: Based on difficulty performance (Easy/Medium/Hard success rates)
- **Improvement Trend**: Comparison of last 5 attempts vs previous 5 attempts
- **Career Match Score**: Percentage match based on required subject scores

### 6. UI/UX Flow

```text
[Quiz Complete] 
     |
     v
[Save Performance Data] --> [Update Skill Analysis]
     |
     v
[Results Page] + [View Performance Button]
     |
     v
[Performance Dashboard]
     |
     +-- [Overall Stats Card]
     |
     +-- [Subject Performance Chart]
     |
     +-- [Strengths & Weaknesses]
     |
     +-- [Career Suggestions]
     |
     +-- [History & Trends]
```

### 7. Integration Points

**Modify Existing Files:**

| File | Changes |
|------|---------|
| `Results.tsx` | Add "View Performance" button, save quiz result to storage |
| `QuizInterface.tsx` | Pass performance data on quiz completion |
| `Index.tsx` | Add "My Performance" navigation card |
| `GradesPage.tsx` | Add "View Performance" button |
| `App.tsx` | Add new routes for `/performance` and `/profile` |

---

## Technical Details

### New Utility Files

**`src/lib/performanceUtils.ts`**
- Functions for saving/loading performance data
- Skill analysis calculations
- Career matching algorithms
- Performance aggregation helpers

**`src/lib/careerData.ts`**
- Career definitions with required skills
- Subject-to-skill mappings
- Career descriptions and icons

### Career Suggestion Algorithm

1. Calculate average score per subject (weighted by recency)
2. Determine skill levels (Analytical, Scientific, Linguistic, etc.)
3. Match skills against career requirements
4. Return top 5 career matches with match percentages

### Data Persistence

- Use localStorage (matching existing `sessionUtils.ts` pattern)
- Optional: Future database migration path with Supabase tables
- Student identification via simple name entry (no auth required)

### Chart Components

Using existing Recharts library:
- RadarChart for multi-subject comparison
- BarChart for difficulty breakdown
- LineChart for progress over time
- PieChart for career match distribution

---

## Implementation Order

1. Create performance utility functions (`performanceUtils.ts`)
2. Create career data and mapping (`careerData.ts`)
3. Build Performance Dashboard page
4. Create visualization components (charts, analysis cards)
5. Build Career Suggestions component
6. Modify Results page to save data and add navigation
7. Add routes and navigation links
8. Add student profile setup (optional name entry)

