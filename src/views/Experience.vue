<template>
  <div class="flex flex-col gap-4 p-8 text-accent">
    <p class="text-3xl">Experience</p>
    <Job
      jobTitle="Associate Software Engineer"
      company="Jahnel Group"
      startDate="June '23"
      endDate="Present"
    >
      <template v-slot:content>
        <p>
          - Lead Full-Stack Developer for a React Native application for an
          inventory and invoice tracking application for a client in the
          automotive industry
        </p>
        <p>
          - Lead Frontend Developer on an internal trivia application built in
          the DERN stack (DynamoDB, Express, React, Node.js)
        </p>
        <p>
          - Serve as a versatile Software Engineering Consultant, meeting each
          client's unique needs
        </p>
      </template>
    </Job>
    <Job
      jobTitle="Junior Software Developer"
      company="The ASSISTments Foundation"
      startDate="Aug '22"
      endDate="May '23"
    >
      <template v-slot:content>
        <p>- Redesigned web pages with the goal of improving user experience</p>
        <p>
          - Modified existing software to correct errors, and upgrade interfaces
          to improve performance
        </p>
        <p>
          - Worked in an Agile team alongside other developers to rapidly
          develop features
        </p>
      </template>
    </Job>
    <Job
      jobTitle="Software Engineer Intern"
      company="Giesel Software Inc."
      startDate="Jan '22"
      endDate="Oct '22"
    >
      <template v-slot:content>
        <p>
          - Lead developer on Internal Financial Dashboard to predict company
          revenue and developer availability
        </p>
        <p>
          - Maintain company notification software which ensures company best
          practices
        </p>
        <p>
          - Work alongside full-time developers on biweekly sprints and issues
        </p>
      </template>
    </Job>
    <Job
      jobTitle="Web Developer"
      company="WPI Marketing Department"
      startDate="Mar '21"
      endDate="Oct '21"
    >
      <template v-slot:content>
        <p>
          - Create responsive design widgets for the main University website
        </p>
        <p>- Provide feedback on layout design</p>
        <p>- Troubleshoot issues and solve critical errors</p>
      </template>
    </Job>
    <Job
      jobTitle="Software Development Intern"
      company="Computer Crafts LLC"
      startDate="May '20"
      endDate="Jan '21"
    >
      <template v-slot:content>
        <p>
          - Worked with IT department with conversion of in-house MRP software
          to web-based version
        </p>
        <p>
          - Assisted production department to improve efficiency of inventory
          tracking and assets management system
        </p>
      </template>
    </Job>
  </div>
</template>

<script setup>
import Job from "../components/Job.vue";
</script>
