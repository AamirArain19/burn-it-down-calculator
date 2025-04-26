
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">About BurnCalc</h1>
            
            <div className="prose max-w-none">
              <p className="text-lg mb-6">
                BurnCalc is your comprehensive resource for tracking calories burned across a variety 
                of different activities. Our mission is to provide accurate, science-based calculators 
                that help you optimize your fitness journey.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Methodology</h2>
              <p>
                All calculators on BurnCalc use the scientifically validated MET (Metabolic Equivalent of Task) 
                system to estimate calorie expenditure. MET values represent the energy cost of physical activities 
                as a multiple of the resting metabolic rate.
              </p>
              <p className="mt-4">
                The basic formula we use is:
              </p>
              <div className="bg-gray-100 p-4 rounded-md my-4">
                <p className="font-mono">Calories Burned = MET × Weight (kg) × Time (hours)</p>
              </div>
              <p>
                While no calculator can provide 100% accurate results due to individual variations in metabolism, 
                fitness level, and efficiency, our calculators provide solid estimates based on scientific research.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
              <p>
                BurnCalc was developed by a team of fitness enthusiasts, nutrition specialists, and web developers 
                who wanted to create a simple yet powerful tool for everyone from beginners to advanced athletes.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Disclaimer</h2>
              <p>
                The information provided by BurnCalc is for informational and educational purposes only. It is not 
                intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek 
                the advice of your physician or other qualified health provider with any questions you may have 
                regarding a medical condition or fitness program.
              </p>
              <p className="mt-4">
                Individual results will vary. Factors such as age, fitness level, gender, health conditions, 
                and environmental factors can all influence actual calorie expenditure.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
              <p>
                Have suggestions for improving our calculators or questions about the site? We'd love to hear from you!
              </p>
              <p className="mt-4">
                Email: <a href="mailto:contact@burncalc.com" className="text-primary hover:underline">contact@burncalc.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
