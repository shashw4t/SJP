import Image from "next/image";

export default function LandingPage() {
  return (
    <section className="landing-page">
      <Image
        src="/app/IMG_9290 (1).jpg" // Updated path to your image
        alt="Profile Picture"
        width={150}
        height={150}
      />
      <h2>Shashw4t</h2>
      <p>Age: 26</p>
      <p>Location: San Francisco, CA</p>
      <p>Open to Opportunities: Software Engineering and Data Science Roles focusing on AI/ML</p>
      <p>Work Preference: Hybrid/Remote</p>
      <p>Minimum Starting Salary: $75,000</p>
    </section>
  );
}