export default function Lab() {
  return (
    <main style={{ fontFamily: "Arial", padding: "40px" }}>
      <h1>Active Directory Home Lab</h1>

      <p>
        This lab simulates a small enterprise environment using Windows Server,
        Active Directory Domain Services, and Windows 11 clients.
      </p>

      <h2>Environment Overview</h2>
      <ul>
        <li>Windows Server 2022 (Domain Controller)</li>
        <li>Active Directory Domain Services (AD DS)</li>
        <li>DNS Role installed on DC</li>
        <li>Windows 11 Client VM</li>
      </ul>

      <h2>Key Concepts Practiced</h2>
      <ul>
        <li>User and Group Management</li>
        <li>Domain Join Process</li>
        <li>DNS Resolution in AD Environments</li>
        <li>Basic Group Policy Concepts</li>
      </ul>

      <h2>Notes</h2>
      <p>
        This environment is used for hands-on learning of enterprise identity
        and access management concepts.
      </p>
    </main>
  );
}