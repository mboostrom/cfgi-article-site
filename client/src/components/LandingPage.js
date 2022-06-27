import React from "react"
import topBar from "../images/top-bar.png"
import headerImage from "../images/header-image.png"
import carAd from "../images/car-ad.png"
import contentTileOne from "../images/content-tile-1.png"
import contentTileTwo from "../images/content-tile-2.png"
import contentTileThree from "../images/content-tile-3.png"
import quotes from "../images/quotes.png"
import footer from "../images/footer.png"

const LandingPage = (props) => {
  return (
    <>
      <div className="top-bar-image">
        <img src={topBar} alt="top-bar" />
      </div>
      <div className="header-image">
        <img src={headerImage} alt="header-image" />
      </div>
      <div className="opening-header">
        <p className="p-1">ACCOUNTING ADVISORY FOR CONSUMER BUSINESS</p>
        <h1 className="header">DISRUPTIVE SHIFTS IN CONSUMER BUSINESS</h1>
        <p>
          Retail with the consumer has evolved significantly. It is a world of multiple channels and
          retailer segments – online, mass merchants, dollar stores, department stores and specialty
          retail – competing for consumers. Consumers and technology have morphed rapidly, and
          retail has long ceased to be a “one-size-fits-all” proposition.
        </p>
        <p>
          The impact of online retail and the retail story continues to unfold. We are witnessing a
          dramatically altered retail landscape, littered with the remains of well-known and
          historical retail brands.
        </p>
      </div>
      <div className="consumer-technology">
        <div className="consumer-left">
          <div className="blue-line"></div>
          <p>
            Consumers and technology continue to change, creating a moving target and endless stream
            of challenges for even the best retailers.
          </p>
        </div>
        <div className="consumer-right">
          <p>
            Consumers and technology continue to change, creating a moving target and endless stream
            of challenges for even the best retailers. Now more than ever, retail survival is a
            journey of disruption and not a destination.
          </p>
          <p>
            Efficiency is the name of the game in consumer business. In today’s markets, achieving
            that efficiency demands innovative approaches to core business functions, including
            shared services, supply chain, operational finance, accounting, IT, risk management and
            compliance.
          </p>
        </div>
      </div>
      <div className="who-we-are-top">
        <h4>Who we are, what we do</h4>
        <p>
          CFGI provides extensive industry expertise combined with data-driven, objective and
          innovative approaches to the most complex retail challenges. Our significant experience
          working with companies at critical inflection points in their lifecycles has informed our
          approach and instilled a sense of urgency in solving problems.
        </p>
        <p>
          Our consumer business experts bring a hands-on approach to retail and consumer product
          business improvement, highlighted by:
        </p>
      </div>
      <div className="who-we-are-list">
        <p>
          Highly experienced senior teams – Our seasoned professionals collaborate efficiently with
          management to identify necessary business needs and manage difficult situations.
        </p>
        <p>
          Specialized industry knowledge – Our experts have a deep knowledge of the retail and
          consumer products landscape, with a detailed understanding of managing the inner workings
          of a business and relevant key performance indicators.
        </p>
        <p>
          Broad range of comprehensive solution offerings – We bring a wide array of skillsets to
          quickly identify challenges and offer solutions to drive sales and profitability, reduce
          costs, and improve planning and forecasting.
        </p>
        <p>
          Objectivity – Our experts are independent drivers of quick results. We understand that
          time is of the essence. In critical situations, we move work within your teams and
          leverage available data to provide actionable solutions.{" "}
        </p>
        <p className="italic">
          If it pertains to finance, accounting, IT, shared services, supply chain, risk, compliance
          or any core business operation, we do it.
        </p>
      </div>
      <div className="ad-rectangle">
        <img src={carAd} alt="car-ad" />
      </div>
      <div className="some-examples">
        <p>
          Some examples of how we deliver strategic support for retailers, distributors, wholesalers
          and consumer product manufacturers include:
        </p>
        <h3>Digital transformation</h3>
        <p>
          CFGI helps consumer business executives assess the performance of their current operating
          models, including those associated with shared services, supply chain management and
          finance. We also provide recommendations for digital processes and technologies that
          maximize efficiency, retention and reduce costs.
        </p>
        <p>
          Our consultants are especially experienced with robotic process automation implementations
          (RPA). We develop, test and deploy software robots over existing IT infrastructure that
          automate data-handling chores and unify disjointed processes. RPA and other innovative
          technologies at our command improve the employee experience, expedite productivity, reduce
          risk, cut costs and generate new revenue opportunities.
        </p>
        <div className="some-examples-middle">
          <div className="ifrs">
            <h3>IFRS advisory</h3>
            <p>
              Getting through the IFRS conversion process and initial reporting period is a great
              challenge. Companies converting to new accounting standards tend to underestimate what
              is involved, particularly in terms of time and resources
            </p>
            <p>
              Conversion to IFRS is much more than a technical accounting issue. IFRS may
              significantly affect any number of a company’s day-to-day operations or even impact
              the reported profitability of the business itself. Companies that have benefited most
              from the transition are those that looked at this as a chance to make improvements to
              their systems and processes and have used it as a focus for more efficient, timely and
              meaningful internal and external financial information
            </p>
          </div>
          <div className="related-Content">
            <h2>RELATED CONTENT</h2>
            <div className="related-content-tile">
              <img src={contentTileOne} alt="content-picture" />
              <div>
                <p className="tile-title">Robotic Process Automation</p>
                <p className="tile-name">Ed Sweeney Partner</p>
              </div>
            </div>
            <div className="related-content-tile">
              <img src={contentTileTwo} alt="content-picture" />
              <div>
                <p className="tile-title">IFRS Compliance</p>
                <p className="tile-name">Ed Sweeney Partner</p>
              </div>
            </div>
            <div className="related-content-tile">
              <img src={contentTileThree} alt="content-picture" />
              <div>
                <p className="tile-title">Interim Financial Experts</p>
                <p className="tile-name">Ed Sweeney Partner</p>
              </div>
            </div>
          </div>
        </div>
        <p>
          CFGI helps companies to successfully complete the transition to IFRS and maintain
          compliance. The deep and relevant expertise of our advisors enables us to provide complex
          services to assist our clients with all areas of IFRS. We also have a range of specialists
          to assist your company in effective transition methodology, technical accounting
          expertise, treasury, tax, interim resources, M&A, valuations and project management.
        </p>
        <h3>Interim management and staffing</h3>
        <p>
          We deploy CFO services and interim management staff immediately and with a relatively
          short ramp-up period. The personnel resources we deliver include but aren’t limited to
          CFOs, interim accounting managers, SEC reporting directors, controllers and revenue
          recognition managers. Our interim managers can partner with your organization for
          short-term functions, for long-term finance-transformation initiatives and everything in
          between.
        </p>
      </div>
      <div className="senior-manager">
        <img src={quotes} />
        <p>
          I get to collaborate with an amazing team of extremely nimble, adaptive, and highly
          specialized professionals who are passionate about investing in their ability to learn,
          unlearn and relearn to provide cutting-edge solutions to some of the most complex
          challenges our clients face. With a support system like that, I can conquer any challenge.
        </p>
        <p>Waleed Zafar, Senior Manager</p>
      </div>
      <div className="bottom-exapmples">
        <h3>IPO readiness</h3>
        <p>
          Going public is a crucial phase of an innovative company’s development. Our experts are
          ready to assist every step of the way, starting with pre-submission preparations and
          carrying all the way over into post-submission assistance such as aftermarket trading
          support.
        </p>
        <h3>Internal audit</h3>
        <p>
          CFGI performs thorough internal audits of operational-finance functions such as procure to
          pay, order to cash, record to report and more. Our experts work closely with your internal
          stakeholders to assess the operating model, including policies and controls. We can then
          provide management with a report highlighting our findings and recommendations for
          improvement and work with them to develop a roadmap for resolving report findings.
        </p>
      </div>
      <div className="more">
        <div className="more-left">
          <div className="blue-line"></div>
          <p>
            Our cross-functional specialists simultaneously approach every project from the lens of
            the accountant, auditor, technologist and consultant.
          </p>
        </div>
        <div className="more-right">
          <h3>More</h3>
          <p>
            We also assist with acquisition support including purchase accounting, purchase price
            allocation valuations, integrations and transitional resources, divestiture support
            including carve-out financial statements, Pro-forma financial statements, held-for-sale
            accounting, and financial reporting analysis, transaction advisory, buy/sell due
            diligence, asset valuations, corporate tax solutions, risk advisory, audit readiness and
            much more.
          </p>
        </div>
      </div>
      <div className="why">
        <h2>WHY CFGI?</h2>
        <p>
          Our cross-functional specialists simultaneously approach every project from the lens of
          the accountant, auditor, technologist, and consultant. This blend of expertise lets us
          provide tailored, strategic guidance that yields immediate and lasting business benefits.
          We also have the resources to cost-effectively execute on our recommendations, and we
          deliver a service experience that is second to none to the consumer business industry.
        </p>
      </div>
      <div className="footer">
        <img src={footer} />
      </div>
    </>
  )
}

export default LandingPage
