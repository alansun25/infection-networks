# Infection Networks

**A work in progress.**

## Description and Inspiration
In the summer of 2021, I worked with a professor on some research in the field of network science and studied some pretty interesting models for generating random graphs – namely, the Erdős–Rényi (random) and Watts-Strogatz (small-world) models. My research inspired me to build this web app to help you visualize any random network up to n = 200 (hoping to increase this in the future with more efficient implementations of the algorithms) that can be generated using either of these models (I'm also self-studying a third model and will be adding that one soon).

Random graphs are extremely useful for modeling a wide array of real-life networks. Most of my summer research focused on one category of real-life networks: social networks. Social networks are extremely relevant in daily life and are especially of interest right now due to the COVID-19 pandemic and contact tracing. This is essentially the premise of this web app: a tool to enable you to visualize how a hypothetical disease will spread through a randomly generated social network.

Currently, you can generate the random graphs. I'm still working on adding the ability to create diseases. Later on, you will also be able create an account and save populations/diseases that you create.

## Tech Stack
- TypeScript (Language)
- Cytoscape.js (Graph drawing)
- React.js (Front-end library)
- Chakra UI (Components and Styling)

