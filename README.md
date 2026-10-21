# Business Analytics Minor – Learning Goals Survey

A small website where colleagues rate 15 short, Bloom's-style learning goals
(Dislike → Absolutely). Responses are saved to a Google Sheet, and a
results page ranks the goals by popularity.

| File | What it is |
|---|---|
| `index.html` | The survey (this is the link you email) |
| `results.html` | Results table and summary (password protected) |
| `goals.js` | The 15 goals and the rating scale/pop-up messages — edit text here |
| `config.js` | Holds the Google Apps Script Web App URL |
| `apps-script/Code.gs` | Code that goes in the Google Sheet to collect responses |

## Why a Google Sheet?
GitHub Pages only hosts static pages; it can't store anything people submit.
A free Google Apps Script attached to a Google Sheet receives each submission
and saves it as a row.

## Setup

### Step 1: Create the GitHub repository
github.com/new → name it (e.g. `ba-minor-goals-survey`) → **Public** → leave
"Add a README" unchecked → **Create repository**.

### Step 2: Turn on GitHub Pages
In the repo: **Settings → Pages** → under *Build and deployment*, Source =
**Deploy from a branch**, Branch = **main**, folder **/ (root)** → **Save**.
After a minute the site is at `https://<your-username>.github.io/<repo-name>/`.

### Step 3: Set up the Google Sheet that collects responses
1. Go to sheets.google.com and create a blank spreadsheet (name it e.g. "BA Goals Survey Responses").
2. **Extensions → Apps Script**. Delete what's in `Code.gs` and paste in the contents of `apps-script/Code.gs`.
3. Change `RESULTS_KEY = "change-me"` to a password of your choice. Click **Save** (💾).
4. **Deploy → New deployment** → gear icon → **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click **Deploy**, then **Authorize access** and allow it (Google may warn
     that the app isn't verified — click *Advanced → Go to (project name)*; it's your own script).
5. Copy the **Web app URL** (ends in `/exec`).

### Step 4: Connect the site to the sheet
Edit `config.js` and paste the Web App URL in place of `PASTE_YOUR_WEB_APP_URL_HERE`. Commit the change.

### Step 5: Test, then send
1. Open the survey link, fill it in, submit. A row should appear on the "Responses" tab of the sheet.
2. Open `.../results.html`, enter your password, and check the results.
3. Delete your test row from the sheet, then email colleagues the survey link:
   `https://<your-username>.github.io/<repo-name>/`

## Notes
- **If you change `Code.gs` later**, use **Deploy → Manage deployments → ✏️ → Version: New version → Deploy**
  so the URL stays the same.
- Preview the results page with fake data anytime: `.../results.html?demo=1`.
- The survey pops up a comment on every 3rd rating click, matched to the rating just chosen.
- The goals appear in a random order for each visitor, so position does not sway the ratings.
- Ranking = average rating (ties broken by % who chose Strongly like or Absolutely). The
  summary also flags the goals with the most divided opinions.
