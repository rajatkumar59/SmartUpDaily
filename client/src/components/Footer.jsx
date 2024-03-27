import { Footer } from "flowbite-react"

function FooterComp() {
  return (
    <Footer container className="border border-t-8 bordrer-teal-500" >
    <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
            <div className="sm:mt-4 md:mt-8">SmartUp Daily</div>

            <div className=" grid grid-cols-2 gap-8  mt-4 sm:grid-cols-3 sm:gap-12 text-left">
                <div className="">
                <Footer.Title title="About" className="mb-3"/>
                <Footer.LinkGroup col >
                    <Footer.Link 
                    href="https://www.rajatkumar.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    About Us
                    </Footer.Link>
                    <Footer.Link
                    href="https://www.rajatkumar.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Contact Us
                    </Footer.Link>
                    <Footer.Link
                    href="https://www.rajatkumar.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Careers 
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
                <div>
                <Footer.Title title="Follow Us"  className="mb-3"/>
                <Footer.LinkGroup col>
                    <Footer.Link 
                    href="https://www.rajatkumar.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Twitter
                    </Footer.Link>
                    <Footer.Link
                    href="https://www.rajatkumar.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Instagram
                    </Footer.Link>
                    <Footer.Link
                    href="https://www.rajatkumar.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Facebook
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
                <div>
                <Footer.Title title="Legal" className="mb-3"/>
                <Footer.LinkGroup col>
                    <Footer.Link 
                    href="https://www.rajatkumar.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Privacy Policy
                    </Footer.Link>
                    <Footer.Link
                    href="https://www.rajatkumar.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Terms of Service
                    </Footer.Link>
                    
                </Footer.LinkGroup>
                </div>
            </div>
        </div>
        <Footer.Divider className="mt-8"/>
        <div className="">
            <Footer.Copyright href="https://www.rajatkumar.in/" by="SmartUpDaily"/>
        </div>
    </div>
    </Footer>
  )
}

export default FooterComp