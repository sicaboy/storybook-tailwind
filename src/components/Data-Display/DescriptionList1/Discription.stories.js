import discriptionList1 from "./DescriptionList1.vue";
export default {
  title: "DiscriptionLists/Discription1",
  component: discriptionList1,
  argTypes: {
    title: {
      control: "text",
    },
    titleDetails: {
      control: "text",
    },
    name: {
      control: "text",
    },
    jobDescription: {
      control: "text",
    },
    email: {
      control: "text",
    },
    salary: {
      control: "text",
    },
    description: {
      control: "text",
    },
  },
};
const template = (args, { argTypes }) => <discriptionList1 {...args} />;
export const Normal = template.bind({});
Normal.args = {
  title: "Applicant Information",
  titleDetails: " Personal details and application.",
  name: "Margot Foster",
  email: "margotfoster@example.com",
  salary: "$120,000",
  jobDescription: "Backend Developer",
  description: "Ac euismod vel sit maecenas id pellentesque eu sed consectetur",
};
