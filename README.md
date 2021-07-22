# Infection Networks

**A work in progress.**

## Description
This focal point of this project is to visualize how disease spreads through populations. It will allows users to create their own
networks and diseases, adjusting parameters such as size and immunity percentage for the population, and infection probability and duration for the disease, etc. There will be different network generation algorithms to choose from, namely Erdős–Rényi (random), Watts–Strogatz (small-world), and Barabási–Albert (preferential attachment).

I am currently focusing on allowing users to generate mock networks. Further down the line, I would like to provide an option to load up a real-life social networks and view how disease may spread through them, as well as allow users to create accounts and save certain networks, diseases, and their parameters.

## Inspiration
I am currently performing network analysis research at Williams College for the summer of 2021. I've studied and implemented the aforementioned random and small-world network-generating algorithms using R, and decided that it would be interesting to create a web application that can visualize these networks dynamically. Adding the disease component into it seemed fun and relevant (COVID-19 type beat). This will also be a good opportunity to learn about preferential attachment, which is a graphing algorithm I won't be studying for my research, and some new JavaScript graphing libraries.

## Tech Stack
- React.js (Front-end library)
- TailwindCSS (Styling)
- Cytoscape.js (Graph visualization)

