# Away

This Away repo uses playwright to automate the below list of scenarios for the awaytravel.com site. 

### Open Away Homepage (www.awaytravel.com)		

- Page loads without issues
- Click on Stores link in Nav		
	> User is taken to the stores landing page (i.e. https://www.awaytravel.com/shop/stores)
	> Title reads "VISIT US IRL"
- Scroll through page		
	> Store Modals appear for each store and display properly
	> Store name appears
	> Address of store is present
	> "SEE STORE" CTA is present
- Hover over "SEE STORE" CTA		
	> Arrow icon animates
- Click on "SEE STORE" CTA for any given store (i.e. NYC: NoHo)		
	> User is taken to given stores individual landing page without any issues
	> Title reads "Away in" and the given store
	> Small descriptions of store is present with Phone number CTA, email CTA, AND FAQs CTA
- Scroll down to "Additional store information" section		
	> Section contains the below with icons:
		> Sanitizing stations
		> Payment Options
		> Curbside Pickup
- Scroll down to store Gallery section		
	> Gallery image loads without any issues
	> Arrow icons are present to scroll horizontally through gallery
	> Number representing image count is displayed towards the bottom
- Click on Arrow Icon or Swipe left on image		
	> Next image comes into view
- Click or tap on number		
	> Slide navigates to the corresponding image
- Scroll down to Map section		
	> Google Map appears with store pinned
	> Address and hours are present
- Interact with Google Map		
	> User should be able to drag map
	> User should be able to zoom in and out


## Getting Started


*	Clone repository
*	run `npm install`
*	run `npx playwright test --debug` OR `npx playwright test`