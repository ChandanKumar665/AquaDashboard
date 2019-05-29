import React from 'react'

const Fishlist = () => {
	return(
			<div className="card box box2 grow pa2 white shadow-3 desc dib mt3">
    		<h1 className="tc f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Fresh water fish</h1>
    		<div className="row">
    			<div className="col-lg-6">
        			<ul>
	            	   	<li>Neon Tetra</li>
	            	   	<li>Oscar</li>
	            	   	<li>Mollies</li>
	            	   	<li>Zebra Danios</li>
	            	   	<li>Platies</li>
	            	   	<li>Cherry Barb</li>
	            	   	<li>Pearl Gourami</li>
	            	   	<li>Swordtails</li>
	            	   	<li>Rainbowfish</li>	         
	            	</ul>
    			</div>
    			<div className="col-lg-6">
    				<div className="pa1">
    					<div className="">
    						<marquee direction="up" scrollamount="3">
    							<img className="img-thumbnail fish" src="https://pixfeeds.com/images/14/392903/1200-47794658-neon-tetra-colored-fish.jpg"/>
    							<div className="pa1"></div>	
    							<img className="img-thumbnail fish" src="http://sacichlidfish.com/wp-content/uploads/2018/09/oscar-fish-care-cover.jpg" />
    							<div className="pa1"></div>	
    							<img className="img-thumbnail fish" src="https://molliesfish.com/wp-content/uploads/2018/12/Black-molly.jpg" />
    							<div className="pa1"></div>
    							<img className="img-thumbnail fish" src="https://m.liveaquaria.com/images/categories/large/lg_39505_Zebra_Longfin_Danio.jpg"/>
    							<div className="pa1"></div>	
    							<img className="img-thumbnail fish" src="https://www.fishkeepingworld.com/wp-content/uploads/2019/03/Xiphophorus-maculatus.jpg" />
    							<div className="pa1"></div>	
    							<img className="img-thumbnail fish" src="https://www.allpondsolutions.co.uk/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/c/h/cherry-barb-1.jpg" />
    							<div className="pa1"></div>	
    							<img className="img-thumbnail fish" src="http://www.tropicalfishsite.com/wp-content/uploads/2014/02/pearl-gourami-300x240.jpg" />
    							<div className="pa1"></div>	
    							<img className="img-thumbnail fish" src="http://sacichlidfish.com/wp-content/uploads/2018/09/oscar-fish-care-cover.jpg" />
    							<div className="pa1"></div>	
    							<img className="img-thumbnail fish" src="https://azure.wgp-cdn.co.uk/app-practicalfishkeeping/features/5171254dd0df7.jpg" />
    							<div className="pa1"></div>
    							<img className="img-thumbnail fish" src="https://www.petmd.com/sites/default/files/facts-about-rainbowfish.jpg"/>
    							<div className="pa1"></div>	
    						</marquee>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
	)
}

export default Fishlist
