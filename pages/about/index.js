import PrimaryLayout from '@/components/layouts/PrimaryLayout';

const About = () => {
  return <div>About</div>;
};

About.getLayout = (page) => (
  <PrimaryLayout title={'About'}>{page}</PrimaryLayout>
);

export default About;
