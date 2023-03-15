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
              <div className="text-gray-600 italic">Bachelor of Science in Computer Science • August 2019 – current</div>
            </div>
          </div>
        </div>
  
        <h2 className="font-bold text-1xl mb-2">Experience</h2>
        <div className="mb-5">
          <div className="flex justify-between font-light">
            <div className="mb-1">
              <div>Software Development Engineer Intern at Amazon</div>
              <div className="text-gray-600 italic">Bellevue, WA • May 2022 – August 2022</div>
            </div>
          </div>
          <ul className="list-disc list-inside pl-4 text-gray-700">
          <li>
            Built an internal workflow automation platform within the Amazon Fulfillment Technologies (AFT) organization in the Fulfillment by Amazon (FBA) organization to decrease operational effort on repetitive tasks for my team
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
        {/* Add other experience sections similar to the above format */}
  
        <h2 className="font-bold text-1xl mb-2">Activities & Extracurriculars</h2>
        <div className="mb-5">
          <div className="flex justify-between font-light">
            <div className="mb-1">
              <div>Undergraduate Researcher at UT Austin</div>
              <div className="text-gray-600 italic">Austin, TX • January 2021 – December 2021 </div>
              </div>
            </div>
          <ul className="list-disc list-inside pl-4 text-gray-700">
          <li>
            Worked with Autonomous Mobile Robotics Lab and Short to Medium Range Autonomous Delivery Systems
          </li>
          <li>
            Investigated problems in robot social intelligence, long-term autonomy, and human-robot interaction
          </li>
          </ul>
        </div>
        {/* Add other activity sections similar to the above format */}
      </section>
  ))
}
