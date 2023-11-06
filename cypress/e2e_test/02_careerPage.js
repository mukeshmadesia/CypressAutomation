
import {countryList, jobCategoryList} from "../fixtures/input.json"

describe('Check career page',()=>{

   // Cypress yields jQuery element, which has the real
   // DOM element under property "0".
   // From the real DOM iframe element we can get
   // the "document" element, it is stored in "contentDocument" property
   // Cypress "its" command can access deep properties using dot notation
   // https://on.cypress.io/its

   beforeEach(function getJobPage() {
      cy.visitSlbPage('careers')
      cy.get('#onetrust-accept-btn-handler').click()
      cy.get('.toggle > a > img').click()
      cy.findByText('Find a Job').click()
   })

    const getIframeBodyOneStep = () => {
      // get the document
      return cy
      .get('iframe')
      .first()
      .wait(5000)
      .its('0.contentDocument.body', { log : false})
      // automatically retries until body is loaded
      .should('not.be.undefined')
      // wraps "body" DOM element to allow
      // chaining more Cypress commands, like ".find(...)"
      .then((body)=> cy.wrap(body, { log : false}))
    }
   
   it('check iframe is rendered',()=>{     
      cy.wait(5000)
      getIframeBodyOneStep()

   })

   for (const country of countryList) {
      it('Check \'' + country + '\' is available to select as Country', ()=> {
         cy.get('#countryFilter').select(country, {force: true})
      })
   }

   for (const jobCategory of jobCategoryList) {
      it('Check \'' + jobCategory + '\' is available to select as Job Category', ()=> {
         cy.get('#jobsFilter').select(jobCategory, {force: true})
      })
   }
})
   
