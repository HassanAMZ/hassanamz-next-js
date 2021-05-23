import { Grid, Box, Heading, Container, Text } from "@chakra-ui/react";
import {
  fontSizeTitle,
  fontSizeHeading,
  fontSizeParagrapgh,
  ProjectRequestButton,
  paddingSpacing,
} from "@/components/Index";
import Head from "next/head";
import { motion } from "framer-motion";
const UpworkProfile = () => {
  return (
    <>
      <Head>
        <title>
          Upwork Profile || Shahzada Ali Hassan - React Js & GTM Expert
        </title>
      </Head>

      <Container maxW="container.lg" mt={"50px"} p={4}>
        <Box p={paddingSpacing}>
          <Heading textAlign={["center"]} as="h1" fontSize={fontSizeTitle}>
            Upwrk Profile Approval Samples
          </Heading>
        </Box>
        <Box p={paddingSpacing}>
          <Heading textAlign={["left"]} as="h2" fontSize={fontSizeHeading}>
            Your Title
          </Heading>
          <Text textAlign={["left"]} as="p" fontSize={fontSizeParagrapgh}>
            Front End Developer || React, Next, Node, CMS
          </Text>
        </Box>
        <Box p={paddingSpacing}>
          <Heading textAlign={["left"]} as="h2" fontSize={fontSizeHeading}>
            Overview & Description
          </Heading>
          <Text textAlign={["justify"]} as="p" fontSize={fontSizeParagrapgh}>
            ***Invites Only*** <br /> <br />✅ HIGHLY TRUSTED and
            HIGHLY-QUALIFIED Front End developer, E-Commerce Developer on
            Upwork, specializing in React, Next, Express, Node Js, Shopify
            WooCommerce Set-up, WordPress Development, Theme & Plugin
            Development, Payment Gateways Expert (Developer Engineer). I have
            worked with 🌟High Profile Clients/Organizations🌟 in my Career,
            including the following to illustrate some of them: <br />
            <br />✅ Wabrmiletech (Top 500 SEO company) <br />✅ Vitali-Chi
            (Biggest E-Commerce Store UK)
            <br />✅ Gh Industries (~30 Million Estimated Revenue) <br />
            <br />
            One of the fastest LEVEL Fiverr Sellers in a month with over 80,000
            competitors in the E-Commerce niche (November 2020). Extensive
            Experience as a WordPress eCommerce Store Development (Since 2016 -
            Present). Setting up WordPress and Themes & Plugin Customization.
            Methodically identifying and resolving complex underlying causes of
            Errors and Fixing plugins & Themes, using a vast variety of
            techniques and tools. I have created 7 Successful Stores and worked
            on many Themes (See portfolio section for references). <br /> <br />
            I’m a Front End React Developer and have worked on 14 React Apps and
            built 6 websites. I have experience in working with States, Hooks,
            Context, and ES6 features, as well as TypeScript, Chakar Ui, and
            Framer motion. Expert Level ability with Fluid Design & Integration,
            Theme Development (TD) from numerous heterogeneous Theme Providers.
            I pride myself in my ability to intuitively gather, interpret and
            understand your requirements, as well as develop intuitive and
            creative Business Intelligence Solutions using the full stack
            (Html5, Css3, JavaScript, PHP, MySQL database, WordPress, Element &
            WooCommerce). 🌟 WHY CHOOSE ME OVER OTHER FREELANCERS? 🌟 <br />
            <br />✅ Client Reviews: I focus on providing VALUE to all of my
            Clients and Earning their TRUST. The Client Reviews and Feedback on
            my Profile are immensely important to me and the value that I
            provide. I’m new to freelance marketplaces so I’ll be doing my best
            to get an excellent review from you. <br />
            <br />✅ Over-Delivering: This is core to my work as a Freelancer.
            My focus is on GIVING more than what I expect to RECEIVE. I take
            pride in leaving all of my Clients saying "WOW" <br /> <br />✅
            Responsiveness: Being extremely responsive and keeping all lines of
            communication readily open with my Clients. <br /> <br />✅
            Resilience: Reach out to any of my Current or Former Clients and ask
            them about my Resilience. Any issue that my Clients face, I attack
            them and find a SOLUTION.
            <br /> <br />✅ Kindness: One of the biggest aspects of my life that
            I implement in every facet of my life. Treating everyone with
            respect, understanding all situations, and genuinely wanting to
            IMPROVE my Client's situations. 🎯I am new to Upwork, I won't
            hesitate to go above and beyond in providing the best services to
            you and make your website completely effective with Google. <br />
            <br />
            💌Message Us Now & Get a 100% Satisfaction <br /> <br /> Hassan
          </Text>
        </Box>
        <Box p={paddingSpacing}>
          <Heading textAlign={["left"]} as="h2" fontSize={fontSizeHeading}>
            Tags
          </Heading>
          <Text textAlign={["left"]} as="p" fontSize={fontSizeParagrapgh}>
            Front end developer
            <br /> Node
            <br /> React <br />
            Next
            <br /> Javascript <br />
            TypeScript
            <br /> WordPress Shopify <br />
            Google analytics
            <br /> Google tag manager
          </Text>
        </Box>
        <Box p={paddingSpacing}>
          <Heading textAlign={["left"]} as="h2" fontSize={fontSizeHeading}>
            Hourly Rate
          </Heading>
          <Text textAlign={["left"]} as="p" fontSize={fontSizeParagrapgh}>
            60$
          </Text>
        </Box>
      </Container>
    </>
  );
};
export default UpworkProfile;
