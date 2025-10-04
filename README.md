# Lending Club Loan Data Analysis

## Dataset Overview
This project analyzes the **Lending Club loan dataset** to predict loan acceptance or rejection based on various features. The dataset includes both **accepted** and **rejected loans** and provides detailed borrower and loan information.

### About the Dataset
- **Source:** [Lending Club Loan Data on Kaggle](https://www.kaggle.com/datasets/wordsforthewise/lending-club)
- **Time Period:** 2007 to present
- **Content:** 
  - Accepted loans include detailed information like **FICO scores**.
  - Rejected loans include data on declined applications.
- **Cleaning:** The dataset was pre-processed to remove unnecessary symbols (e.g., `%`), and specific columns were converted to numerical formats for analysis.

---

## Problem Definition
The goal of this project is to build a predictive model to determine whether a loan will be accepted or rejected. The analysis focuses on:
1. **Minimizing risks** of loan investments by improving prediction accuracy.
2. Providing **insights** into features that influence loan approval.
3. Managing and analyzing **large datasets** effectively.

---

## Objectives
1. **Analyze and Predict Loan Approval:**
   - Build and evaluate a predictive model using the **DecisionTreeClassifier**.
2. **Improve Prediction Accuracy:**
   - Minimize errors in loan approval predictions by applying preprocessing techniques and tuning the model.
3. **Feature Importance Analysis:**
   - Identify key features that impact loan acceptance.

---

## Data Preprocessing Steps
1. **Handling Missing Values:**
   - Missing data was either filled with appropriate values or removed if excessive.
2. **Column Removal:**
   - Columns with many unique or irrelevant values were dropped.
3. **Encoding Categorical Features:**
   - Features like loan type and borrower details were converted to numeric values using **One-Hot Encoding**.
4. **Feature Scaling:**
   - Numerical data was standardized to ensure all features are on the same scale.
5. **Train-Test Split:**
   - The dataset was split into 70% training and 30% testing data for effective evaluation.

---

## Model and Metrics
- **Model:** DecisionTreeClassifier
  - Handles both categorical and numerical data effectively.
  - Easy to interpret and tune for improved accuracy.
- **Evaluation Metrics:**
  - **Accuracy:** Measures the overall correctness of predictions.
  - **Precision & Recall:** Evaluates false positives and false negatives.
  - **F1-Score:** Balances precision and recall to provide a comprehensive metric.

---


## Access the Code
[code](https://github.com/majdfo/Big-Data-Project/blob/main/code.ipynb).

---

## BloomWatch Archive

For convenience, the React/Firebase prototype requested in this project is exported as `bloomwatch.zip` at the repository root. The archive is generated from the `bloomwatch/` directory and includes the configured `.env` file provided by the requester, so it remains gitignored and should be regenerated locally whenever updates are made to the app.

### Automated Artifact

A GitHub Actions workflow (`.github/workflows/upload-bloomwatch-bundle.yml`) zips the `bloomwatch/` directory and uploads it as the `bloomwatch-bundle` artifact whenever the app or workflow definition changes, or when triggered manually. To ensure the generated archive includes a populated `.env`, define the following repository secrets before running the workflow:

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_APP_ID`

If the secrets are omitted, the workflow still produces an archive, but it will not contain the Firebase environment file. After the workflow finishes, download the artifact from the corresponding workflow run summary in GitHub Actions.

To download the package directly from the execution environment, use the sandbox artifact link exposed by the automation workflow (for example: `sandbox:/workspace/Big-Data-Project/bloomwatch.zip`).
