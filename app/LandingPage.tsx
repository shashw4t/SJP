import Image from "next/image";

export default function LandingPage() {
  return (
    <section className="landing-page">
      <div className="background-image">
        <Image
          src="/app/IMG_9290_1.jpg" // Updated path to your image
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <h2>Shashw4t</h2>
      <p>Age: 26</p>
      <p>Location: New Jersey</p>
      <p>Open to Opportunities: Software Engineering and Data Science Roles focusing on AI/ML</p>
      <p>Work Preference: Hybrid/Remote</p>
      <p>Minimum Starting Salary: $75,000</p>
    </section>
  );
}