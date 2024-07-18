// app/page.tsx
'use client';

import Header from './components/Header';
import Introduction from './components/Introduction';
import Roadmap from './components/Roadmap';
import { Role } from './interfaces/Role';
import Footer from './components/Footer';

export default function Home() {
  const roles: Role[] = [
    {
      title: "Software Development Engineer II",
      company: "IBM",
      duration: "July 2023 - Present",
      projectName: "(SaaS Usage-Based Billing Framework)",
      workItems: [
        "Led the development of a framework to charge customers based on application usage for the SaaS offering of an Asset Management Product.",
        "Collaborated with a cross-functional team to conduct extensive discussions and create comprehensive high-level designs",
        "Enhanced the customer billing process, resulting in improved revenue tracking and customer satisfaction",
        "Mentored Junior Developers"
      ],
    },
    {
      title: "Software Development Engineer I",
      company: "IBM",
      duration: "July 2020 - July 2023",
      projectName: "(Cloud Automation Scripts)",
      workItems: [
        "Created automation scripts using Ansible to deploy dependencies such as MongoDB, Document DB, IBM Eventstream, and configure Kafka automatically across AWS, Azure, and IBM clouds.",
        "Ensured scripts were idempotent, reducing dependency deployment time by 90% and eliminating manual errors.",
        "Significantly benefitted DevOps teams and clients by automating complex deployment tasks, facilitating easier and faster product deployment.",
      ],
    },
    {
      title: "Software Development Engineer I",
      company: "IBM",
      duration: "July 2020 - July 2023",
      projectName: "(Blockchain-Based Document Store Migration)",
      workItems: [
        "Developed a Migration tool to transition documents from SQL DB and CouchDB to IBM Cloud Object Storage as part of a major upgrade to a Hyperledger Fabric Blockchain based Document Store Application.",
        "Wrote verification scripts to ensure no data was left behind before the major upgrade and cleaned up all migrated data.",
        "Successfully migrated millions of documents without any faults, completing the project on time.",
        "Received the highest technical achievement award for this migration project."
      ],
    },
  ];
  return (
    <>
      <section className='' id='pf-header'>
        <Header />
        <Introduction />

        <Roadmap roles={roles} />

      </section>

      <section className='footer'>
        <Footer />
      </section>


    </>
  );
}