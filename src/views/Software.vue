<template>
  <div class="flex flex-col gap-4 p-8 text-accent">
    <p class="text-3xl">Software Projects</p>
    <p class="text-lg">
      From picking a college to picking a restaurant, why not make programs make
      the desisions that you can't figure out yourself? If I can make a program
      do it for me, I will! Take a look through my portfolio to find out exactly
      what I make computers do in my day-to-day life.
    </p>
    <!-- TODO: add stride sync as project -->
    <Project
      title="Developing Quality of Life Features for the E-TRIALS Platform"
    >
      <template v-slot:content>
        <p>
          Following the COVID-19 pandemic, the ASSISTments Foundation launched
          E-TRIALS (EdTech Research Infrastructure to Advance Learning Science)
          as a tool for researchers to understand different teaching tools and
          methods, with the goal of understanding how best to provide feedback
          and assistance to students. In this project, students worked alongside
          full-time employees in an Agile environment to improve the current
          E-TRIALS platform. Additions were made to the previous release of the
          platform, adding in new functionality and improving the overall user
          experience. You can read the final report documenting my work
          <a
            class="text-primary underline hover:text-secondary"
            href="src/assets/eagorelik-MQPpaper.pdf"
            target="_blank"
            >here</a
          >.
        </p>
      </template> </Project
    ><Project
      title="Equipment Tracking Software for Brigham and Women's Hospital"
    >
      <template v-slot:content>
        <p>
          Full-Stack Java application to manage equipment across hospital floors
          for Brigham and Women's Hospital. As the Front-End Lead Developer of
          an eleven-person team, I was responsible for managing the layout and
          flow of the overall application. I also conducted quality control and
          acted as a resource for the junior developers on the team. The source
          code for the project can be seen
          <a
            class="text-primary underline hover:text-secondary"
            href="https://github.com/emilygorelik/SoftEngFinal"
            target="_blank"
            >here</a
          >.
        </p>
      </template> </Project
    ><Project title="Universitea">
      <template v-slot:content>
        <p>
          Two true facts: <br />
          1. There are thousands of colleges in the United States. <br />
          2. I was (and still am) a very indecisive person.
          <br />This led to the creation of Universitea. Your one-stop shop to
          finding the college that is your perfect cup of tea. Many college
          search engines can filter by which school is the best for Computer
          Science or which has the best food on campus, but I wanted to know
          everything at once, and Universitea was born! Universitea gives users
          a comprehensive list of everything they're looking for, and even
          filters for safety, target, and reach schools.
        </p>
      </template>
    </Project>
  </div>
</template>

<script setup>
import Project from "../components/Project.vue";
</script>
