/* eslint-disable prettier/prettier */

/*
=========================================================
* Material Kit 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React components
import SimpleBlogCard from "examples/Cards/BlogCards/SimpleBlogCard";

const actionProps = {
  type: "internal",
  color: "dark",
  label: "find more",
};

function Blog() {
  const links = [
    "https://www.cnn.com/2024/06/10/health/planetary-diet-longevity-study-wellness/index.html",
    "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10489295/",
    "https://www.medicalnewstoday.com/articles/regularly-eating-avocado-linked-to-lower-diabetes-risk-in-women#Studying-avocado-consumption-and-diabetes-risk",
  ];

  const blogPosts = [
    {
      image: "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-88307658.jpg?q=w_1110,c_fill/f_webp",
      title: "Planet-first diet cuts risk of early death by nearly a third",
      description: "Closely following a planet-friendly diet of mostly fruits, vegetables and whole grains reduces the risk of premature death by nearly one-third in people, while also dramatically cutting the release of greenhouse gases devastating the planet.",
    },
    {
      image: "https://www.verywellfit.com/thmb/JkYWOKkbR3qxN8cOeq9dpveIv-Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/avocado_annotated-29ebeb829c02433aaa55de1ab7d28643.jpg",
      title: "Avocados may play a beneficial role in diabetes management and prevention.",
      description: "Research indicates that regular avocado consumption is associated with a lower risk of developing type 2 diabetes, particularly among women. ",
    },
    {
      image: "https://images.unsplash.com/photo-1502642074847-9afe11995f6b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Regularly eating avocado linked to lower diabetes risk in women",
      description: "A recent study from Mexico links avocado consumption with a lower diabetes risk. Image credit: Tatiana Maksimova/Getty Images.",
    },
  ];

  return (
    <MKBox component="section" py={3} mt={5}>
      <Container>
        <Grid
          container
          item
          flexDirection="column"
          alignItems="center"
          xs={12}
          lg={6}
          sx={{ textAlign: "center", mx: "auto" }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="Блог"
            container
            circular
            sx={{ mb: 1 }}
          />
          <MKTypography variant="h2" mb={1}>
            Блог пости{" "}
          </MKTypography>
          <MKTypography variant="body2" color="text">
            Корисні ресурси
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <MKBox mt={3}>
                <SimpleBlogCard
                  image={post.image}
                  title={post.title}
                  description={post.description}
                  action={{
                    ...actionProps,
                    route: links[index], // Assign the unique link from the links array
                  }}
                />
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Blog;
