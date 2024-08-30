export default function CardDescription({ title, description }) {
    return (
      <div className="card-description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
  