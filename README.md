SLB Demo Project - 08-11-2023

Automation Test SLB - Cypress folder containing cypress Automation test Automation script can be run via Github action, Steps are mentioned below. Test will run on different browsers- Chrome, Electron, Edge. 

Post Test execution result link can be found at the end of 'Cypress step' in GitHub Actions.

## Project description:
  #### Project is based on cypress (Using Javascript) and integrated Chai and mocha.
  #### feature files are kept in - '''CypressAutomation\cypress\e2e_test'''
  #### Following cases has been Automated :
      1. redirection feature      
      - Validation that slb.com is correctly being directed to https://www.slb.com.
      2. Carrer Page        
      - Verify given country names are present in dropdown to select.
      - Verify given Job category  are present in dropdown to select.
    
  ### 'Norway' is not found in the country list

## Run Test - On Push
1. Push the changes 

## To Run Test(Adhoc) via github action
1. Go To 'Actions' tab on Github Repo -
2. Go to (Click) on 'Adhoc Cypress Tests' on Workflows (Left Side)
3. Click on 'Run Workflow' (on right side on portal)
4. Again click on 'Run workflow' button to trigger the TestCase
5. It may take few seconds, to reflect new run
6. Click on latest run

## To Set Up and Run Locally 
   Prerequisite - Node JS (Verify using --> node -v)

1. Clone the project
2. Go to Project folder using
   Run ```cd <folder name>```
3. On Terminal 
   Run ```npm install```
4. Run ```npx cypress open```
5. A cypress client will open up. Click on E2E Testing
6. Click on browser of choice (say Chrome)
7. 'Start E2E Testing in Chrome'
8. In Browser, Specs You can see Specs (feature) files
9. Click and Run the specs