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
      <h2 className="name-title">Shashw4t</h2>
      <p className="info-item">Age: 26</p>
      <p className="info-item">Location: New Jersey</p>
      <p className="info-item">Open to Opportunities: Software Engineering and Data Science Roles focusing on AI/ML</p>
      <p className="info-item">Work Preference: Hybrid/Remote</p>
      <p className="info-item">Minimum Starting Salary: $75,000</p>
    </section>
  );
}