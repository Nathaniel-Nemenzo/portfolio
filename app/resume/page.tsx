import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume',
  description:
    "My full resume.",
};

export default function ResumePage() {
  return (
    (
      <section>
        <h1 className="font-bold text-3xl font-serif mb-5">Resume</h1>
  
        <h2 className="font-bold text-1xl mb-2">Education</h2>
        <div className="mb-4">
          <div className="flex justify-between mb-1 font-light">
            <div>
              <div>The University of Texas at Austin</div>
              <div className="text-gray-700 italic dark:text-gray-300">Bachelor of Science in Computer Science • August 2019 – current</div>
            </div>
          </div>
        </div>
  
        <h2 className="font-bold text-1xl mb-2">Experience</h2>
        <div className="mb-5">
          <div className="flex justify-between font-light">
            <div className="mb-1">
              <div>Software Development Engineer Intern at Amazon</div>
              <div className="text-gray-700 italic dark:text-gray-300">Bellevue, WA • May 2022 – August 2022</div>
            </div>
          </div>
          <ul className="list-disc list-inside pl-4 text-gray-600 dark:text-gray-200">
            <slot />
          <li>
          Built internal an internal workflow automation platform within the Amazon Fulfillment Technologies (AFT) organization in the
          Fulfillment by Amazon (FBA) organization to decrease tooling operational effort on internal teams by an average of 23%
          </li>
          <li>
            Wrote Java code for Lambda functions to implement business logic for automation service, including unit tests
          </li>
          <li>
            Designed and implemented a loosely coupled service architecture and provisioned infrastructure comprised fully of AWS services, including Lambda, DynamoDB, SQS (Simple Queue Service), and API Gateway
          </li>
          <li>
            Participated in tri-weekly standups and scheduled weekly sync-ups with mentors and clients
          </li>
          </ul>
        </div>
        <div className="mb-5">
          <div className="flex justify-between font-light">
            <div className="mb-1">
              <div>Software Engineer Intern at UT Austin Instructional Technology Services</div>
              <div className="text-gray-700 italic dark:text-gray-300">Austin, TX • February 2021 – May 2022</div>
            </div>
          </div>
          <ul className="list-disc list-inside pl-4 text-gray-600 dark:text-gray-200">
          <li>
          Planned and developed a proprietary full-stack system observability application using Laravel for administrative use, enabling
          observability of internal systems using a web interface for system administrator, reducing costs by 12%
          </li>
          <li>
          Developed the first iteration of a system monitoring database in MySQL, writing queries for retrieval and insertion, and using
          CRON jobs for scheduled system checkups and other tasks
          </li>
          </ul>
        </div>
        <div className="mb-5">
          <div className="flex justify-between font-light">
            <div className="mb-1">
              <div>Summer Research Fellow at UT Austin Learning Agents Research Group</div>
              <div className="text-gray-700 italic dark:text-gray-300">Austin, TX • May 2021 – August 2021</div>
            </div>
          </div>
          <ul className="list-disc list-inside pl-4 text-gray-600 dark:text-gray-200">
          <li>
          Awarded a grant of $3000 to conduct research in robotics at UT Austin with Autonomous Mobile Robotics Lab (AMRL) and
          Short to Medium Range Autonomous Delivery Systems (SMADS)
          </li>
          <li>
          Developed and tested an in-house C++ SDK for Boston Dynamics’ Spot, used in 2 other research projects
          </li>
          <li>
          Wrote a research paper involving robotic dog fetching and vision-based object prediction using the C++ SDK as infrastructure
          </li>
          </ul>
        </div>
        {/* Add other experience sections similar to the above format */}
  
        <h2 className="font-bold text-1xl mb-2">Activities & Extracurriculars</h2>
        <div className="mb-5">
          <div className="flex justify-between font-light">
            <div className="mb-1">
              <div>Undergraduate Researcher at UT Austin</div>
              <div className="text-gray-700 italic dark:text-gray-300">Austin, TX • January 2021 – December 2021 </div>
              </div>
            </div>
          <ul className="list-disc list-inside pl-4 text-gray-600 dark:text-gray-200">
          <li>
            Worked with Autonomous Mobile Robotics Lab and Short to Medium Range Autonomous Delivery Systems
          </li>
          <li>
            Investigated problems in robot social intelligence, long-term autonomy, and human-robot interaction
          </li>
          </ul>
        </div>

        <h2 className="font-bold text-1xl mb-2">Professional Certifications</h2>
        <div className="mb-5">
          <div className="flex justify-between font-light">
            <div className="mb-1">
              <div><a href="
                   https://www.coursera.org/account/accomplishments/certificate/5U9QMFBDNVH4"
                   className="hover:underline">Advanced Learning Algorithms</a></div>
                  <div className="text-gray-700 italic dark:text-gray-300">February 2023</div>
              </div>
            </div>
        </div>
        <div className="mb-5">
          <div className="flex justify-between font-light">
            <div className="mb-1">
              <div><a href="https://www.coursera.org/account/accomplishments/certificate/MRQW9SDQB5HH
" className="hover:underline">Supervised Machine Learning: Regression and Classification</a></div>
              <div className="text-gray-700 italic dark:text-gray-300">January 2023</div>
              </div>
            </div>
        </div>
        {/* Add other activity sections similar to the above format */}
      </section>
  ))
}
