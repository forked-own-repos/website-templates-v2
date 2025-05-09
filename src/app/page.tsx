import { Award, Check, ChevronDown, Facebook, Globe, Instagram, Leaf, Linkedin, Twitter, } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center bg-no-repeat"></div>
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col">
          {/* Navigation */}
          <nav className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="w-48 h-12 bg-white/90 rounded-md flex items-center justify-center text-green-800 font-bold text-xl">
                GRUPO AYR LOGO
              </div>
            </div>
            <div className="hidden lg:flex space-x-8 text-white font-medium">
              <a href="#about" className="hover:text-green-300 transition">About Us</a>
              <a href="#companies" className="hover:text-green-300 transition">Our Companies</a>
              <a href="#products" className="hover:text-green-300 transition">Products</a>
              <a href="#certifications" className="hover:text-green-300 transition">Certifications</a>
              <a href="#sustainability" className="hover:text-green-300 transition">Sustainability</a>
              <a href="#contact" className="hover:text-green-300 transition">Contact</a>
            </div>
            <div className="lg:hidden text-white">
              <button className="p-2">
                <div className="w-6 h-0.5 bg-white mb-1.5"></div>
                <div className="w-6 h-0.5 bg-white mb-1.5"></div>
                <div className="w-6 h-0.5 bg-white"></div>
              </button>
            </div>
          </nav>
          
          {/* Hero Content */}
          <div className="flex-1 flex flex-col justify-center items-start max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Agroindustry with <span className="text-green-300">Purpose</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              From our fields to your table. Sustainably grown and processed tropical roots, 
              delivered as premium ingredients worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-green-500 text-white rounded-md font-medium hover:bg-green-600 transition shadow-lg">
                Discover Our Products
              </button>
              <button className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-md font-medium hover:bg-white/30 transition">
                Learn About Our Process
              </button>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center">
            <p className="mb-2 text-sm font-light">Scroll to explore</p>
            <ChevronDown className="mx-auto animate-bounce" size={24} />
          </div>
        </div>
      </header>

      {/* Key Features Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Makes Us Different</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Grupo AYR is a Honduran business group with over 12 years of experience 
              in the agro-industrial sector, focused on innovation and sustainability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
               {/* TODO : CHANGE ICON */}
                <Check className="text-green-600" size={28} /> 
              </div>
              <h3 className="text-xl font-bold mb-3">26+ Types of Flour</h3>
              <p className="text-gray-600">
                Single ingredient, non-gluten flour varieties made from tropical roots,
                perfect for diverse culinary applications.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Vertically Integrated</h3>
              <p className="text-gray-600">
                From farm to table: complete control over planting, farming, harvesting, 
                and processing ensures premium quality.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">12+ Pet Treats</h3>
              <p className="text-gray-600">
                Natural and healthy pet treats made from 100% fresh raw materials, 
                with no additives or preservatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">About Grupo AYR</h2>
              <p className="text-gray-600 mb-6">
                From the heart of the Comayagua Valley in Honduras, we cultivate, process, 
                and export agricultural products that meet international quality standards, 
                driving sustainable economic development.
              </p>
              <p className="text-gray-600 mb-6">
                Our operation focuses on tropical roots such as sweet potato, cassava, and taro, 
                and their transformation for both human and animal consumption. With over 12 years 
                of experience, we've established ourselves as leaders in the agro-industrial sector.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Check className="text-green-500 mr-2" size={20} />
                  <span>600+ Hectares Cultivated</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-500 mr-2" size={20} />
                  <span>Organic Certification</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-500 mr-2" size={20} />
                  <span>Export to Global Markets</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-500 mr-2" size={20} />
                  <span>Sustainable Practices</span>
                </div>
              </div>
              
              <button className="px-8 py-3 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition">
                Learn More About Us
              </button>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden h-64">
                <img src="/api/placeholder/600/800" alt="Farming operations" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden h-64 mt-8">
                <img src="/api/placeholder/600/800" alt="Processing facility" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden h-64">
                <img src="/api/placeholder/600/800" alt="Products" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden h-64 mt-8">
                <img src="/api/placeholder/600/800" alt="Farm workers" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Companies Section */}
      <section id="companies" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Companies</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Grupo AYR operates through three specialized companies, each focused on 
              different aspects of the agricultural value chain.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group">
              <div className="h-56 bg-green-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent"></div>
                <img src="/api/placeholder/600/400" alt="SEMIG" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">SEMIG</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3">Agricultural Production</h4>
                <p className="text-gray-600 mb-4">
                  Operating over 600 hectares under sustainable practices. Specializes in production of 
                  tropical roots and staple crops with a focus on quality and traceability.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center">
                    <Check className="text-green-500 mr-2" size={16} />
                    <span className="text-sm">Certified organic farming</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-green-500 mr-2" size={16} />
                    <span className="text-sm">Good Agricultural Practices (GAP)</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-green-500 mr-2" size={16} />
                    <span className="text-sm">Responsible production</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group">
              <div className="h-56 bg-orange-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 to-transparent"></div>
                <img src="/api/placeholder/600/400" alt="INTERBAI" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">INTERBAI</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3">Human Consumption Products</h4>
                <p className="text-gray-600 mb-4">
                  Division focused on processing agricultural products into food for human consumption.
                  Specializes in flours, dehydrated products, and premixes.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center">
                    <Check className="text-green-500 mr-2" size={16} />
                    <span className="text-sm">Food safety certifications</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-green-500 mr-2" size={16} />
                    <span className="text-sm">Industrial processing with traceability</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-green-500 mr-2" size={16} />
                    <span className="text-sm">Global exports</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group">
              <div className="h-56 bg-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                <img src="/api/placeholder/600/400" alt="MELY FOODS" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">MELY FOODS</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3">Animal Nutrition Products</h4>
                <p className="text-gray-600 mb-4">
                  Specialized in developing and supplying functional ingredients for the animal 
                  nutrition industry, with a focus on pet food and treats.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center">
                    <Check className="text-green-500 mr-2" size={16} />
                    <span className="text-sm">Functional and natural ingredients</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-green-500 mr-2" size={16} />
                    <span className="text-sm">Products for premium pet food</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-green-500 mr-2" size={16} />
                    <span className="text-sm">Sustainable and safe standards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Premium Products</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              From single-ingredient flours to specialized pet treats, our products represent 
              the highest quality standards in the industry.
            </p>
          </div>
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Flour Varieties</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Sweet Potato Flour",
                "Purple Sweet Potato Flour",
                "Cassava Flour",
                "Taro Flour",
                "Green Banana Flour",
                "Turmeric Flour",
                "Yucca Flour",
                "Plantain Flour"
              ].map((flour, index) => (
                <div key={index} className="bg-green-50 p-4 rounded-lg text-center hover:bg-green-100 transition">
                  <div className="w-20 h-20 rounded-full bg-green-200 mx-auto mb-3 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img src={`/api/placeholder/100/100`} alt={flour} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <p className="font-medium">{flour}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button className="px-6 py-2 border border-green-600 text-green-600 rounded-md font-medium hover:bg-green-600 hover:text-white transition">
                View All 26+ Flour Varieties
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Pet Treats</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Sweet Potato Chews",
                "Cassava Biscuits",
                "Banana Bites",
                "Taro Treats",
                "Mixed Root Crisps",
                "Organic Dental Sticks",
                "Training Treats",
                "Hypoallergenic Snacks"
              ].map((treat, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg text-center hover:bg-blue-100 transition">
                  <div className="w-20 h-20 rounded-full bg-blue-200 mx-auto mb-3 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img src={`/api/placeholder/100/100`} alt={treat} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <p className="font-medium">{treat}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md font-medium hover:bg-blue-600 hover:text-white transition">
                View All Pet Treats
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Farm-to-Table Process</h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              We control every step of the process, ensuring quality, sustainability, and traceability.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-green-500 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 relative">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-2xl font-bold mb-3">Planting & Cultivation</h3>
                  <p className="text-gray-300">
                    Using organic and sustainable practices, we carefully select and plant 
                    the highest quality seeds and cuttings in our 600+ hectare farm.
                  </p>
                </div>
                <div className="hidden md:flex items-center justify-center z-10">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="font-bold">1</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
                  <div className="rounded-lg overflow-hidden h-48">
                    <img src="/api/placeholder/600/400" alt="Planting process" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-2">
                  <div className="rounded-lg overflow-hidden h-48">
                    <img src="/api/placeholder/600/400" alt="Growing process" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center z-10 order-2 md:order-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="font-bold">2</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0 order-3 md:order-1">
                  <h3 className="text-2xl font-bold mb-3">Growing & Monitoring</h3>
                  <p className="text-gray-300">
                    Our crops are carefully monitored throughout their growth cycle, 
                    ensuring optimal development without synthetic pesticides or fertilizers.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-2xl font-bold mb-3">Harvesting</h3>
                  <p className="text-gray-300">
                    When our crops reach optimal maturity, they are harvested by hand to ensure 
                    the highest quality and minimize damage to the delicate roots.
                  </p>
                </div>
                <div className="hidden md:flex items-center justify-center z-10">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="font-bold">3</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
                  <div className="rounded-lg overflow-hidden h-48">
                    <img src="/api/placeholder/600/400" alt="Harvesting process" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-2">
                  <div className="rounded-lg overflow-hidden h-48">
                    <img src="/api/placeholder/600/400" alt="Processing" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center z-10 order-2 md:order-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="font-bold">4</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0 order-3 md:order-1">
                  <h3 className="text-2xl font-bold mb-3">Processing & Manufacturing</h3>
                  <p className="text-gray-300">
                    In our state-of-the-art facilities, crops are washed, processed, and transformed 
                    into flours, pet treats, and other products under strict quality controls.
                  </p>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-2xl font-bold mb-3">Quality Control & Packaging</h3>
                  <p className="text-gray-300">
                    Every product undergoes rigorous testing before being carefully packaged 
                    to preserve freshness and ensure it meets our high quality standards.
                  </p>
                </div>
                <div className="hidden md:flex items-center justify-center z-10">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="font-bold">5</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
                  <div className="rounded-lg overflow-hidden h-48">
                    <img src="/api/placeholder/600/400" alt="Quality control" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              
              {/* Step 6 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-2">
                  <div className="rounded-lg overflow-hidden h-48">
                    <img src="/api/placeholder/600/400" alt="Global distribution" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center z-10 order-2 md:order-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="font-bold">6</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0 order-3 md:order-1">
                  <h3 className="text-2xl font-bold mb-3">Global Distribution</h3>
                  <p className="text-gray-300">
                    Our products are shipped worldwide, reaching customers who value quality, 
                    sustainability, and the unique properties of our tropical root derivatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Certifications</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We operate under the highest international quality standards, 
              ensuring food safety, sustainability, and ethical practices.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {[
              { title: "USDA Organic", desc: "US Department of Agriculture organic certification" },
              { title: "EU Organic", desc: "European Union organic products certification" },
              { title: "GAP", desc: "Good Agricultural Practices certification" },
              { title: "HACCP", desc: "Hazard Analysis Critical Control Points" },
              { title: "ISO 22000", desc: "Food safety management system (in process)" },
              { title: "Kosher", desc: "Compliant with Jewish dietary regulations" }
            ].map((cert, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition text-center">
                <div className="w-24 h-24 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
                  <img src={`/api/placeholder/100/100`} alt={cert.title} className="w-16 h-16 object-contain" />
                </div>
                <h3 className="font-bold mb-1">{cert.title}</h3>
                <p className="text-xs text-gray-500">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
<section id="sustainability" className="py-20 bg-green-800 text-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Commitment to Sustainability</h2>
      <p className="max-w-2xl mx-auto text-green-100">
        Grupo AYR is committed to environmental stewardship and social responsibility 
        in every aspect of our business model.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Leaf className="text-green-800" size={24} />
        </div>
        <h3 className="text-xl font-bold mb-3">Regenerative Agriculture</h3>
        <p className="text-green-100">
          We implement cultivation practices that restore soil health, improve biodiversity, 
          and capture carbon, going beyond sustainability to regeneration.
        </p>
      </div>
      
      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Globe className="text-green-800" size={24} />
        </div>
        <h3 className="text-xl font-bold mb-3">Environmental Impact</h3>
        <p className="text-green-100">
          Through water conservation, renewable energy, and waste reduction initiatives, 
          we minimize our environmental footprint across all operations.
        </p>
      </div>
      
      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <img src="/api/placeholder/50/50" alt="Community icon" className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold mb-3">Social Responsibility</h3>
        <p className="text-green-100">
          We create dignified rural employment opportunities, provide fair wages, and 
          invest in community development throughout the Comayagua Valley.
        </p>
      </div>
      
      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <img src="/api/placeholder/50/50" alt="Ethical trade icon" className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold mb-3">Fair & Responsible Trade</h3>
        <p className="text-green-100">
          Our business relationships are built on transparency, ethical practices, and long-term 
          partnerships that benefit all stakeholders in the value chain.
        </p>
      </div>
    </div>
    
    <div className="mt-16 text-center">
      <button className="px-8 py-3 bg-white text-green-800 rounded-md font-medium hover:bg-green-100 transition shadow-md">
        Learn About Our Sustainability Initiatives
      </button>
    </div>
  </div>
</section>

<section className="py-20 bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Discover Premium Tropical Root Products?</h2>
          <p className="max-w-2xl mx-auto mb-10 text-green-100">
            Join our global network of partners and experience the quality, sustainability, 
            and innovation that sets Grupo AYR apart.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-green-800 rounded-md font-medium hover:bg-green-100 transition shadow-lg">
              Request a Sample
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-md font-medium hover:bg-white/10 transition">
              Download Our Catalog
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="w-48 h-12 bg-white/90 rounded-md flex items-center justify-center text-green-800 font-bold text-xl mb-6">
                GRUPO AYR LOGO
              </div>
              <p className="text-gray-400 mb-6">
                Agroindustry with Purpose: From our Honduran fields to global markets, 
                delivering sustainable tropical root products.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6">Our Companies</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition">SEMIG</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">INTERBAI</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">MELY FOODS</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6">Products</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Flour Varieties</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Pet Treats</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Food Ingredients</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Agricultural Products</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Sustainability</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Certifications</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <hr className="border-gray-800 my-10" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Grupo AYR. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white transition text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white transition text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white transition text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>


      </div>
  );
}