describe("Check slb.com is redirecting", ()=>{
    it('check redirection to "https://slb.com", status as 302', ()=>{

        cy.request({
            method: 'GET',
            url:"www.slb.com/",
            followRedirect:false //dont redirect

        }).then((response)=>{            
            expect(response.status).to.equal(302)
            expect(response.headers).to.have.property('location','https://www.slb.com/')
        })

     
    })

})