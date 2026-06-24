export default function ActiveDirectoryProject() {
  return (
    <main style={{ fontFamily: "Arial", padding: "40px" }}>
      <h1>Active Directory Home Lab</h1>

      <p style={{ maxWidth: "800px", lineHeight: "1.6" }}>
        This project documents a Windows Server-based Active Directory lab used
        to practice enterprise identity, authentication, DNS, Group Policy, and
        Windows client administration.
      </p>

      <h2>Environment</h2>
      <ul>
        <li>Windows Server 2022 Domain Controller</li>
        <li>Active Directory Domain Services</li>
        <li>DNS role installed on the domain controller</li>
        <li>Windows 11 domain-joined client VM</li>
        <li>VirtualBox virtualization environment</li>
      </ul>

      <h2>Skills Demonstrated</h2>
      <ul>
        <li>Creating and managing users and groups</li>
        <li>Joining a Windows client to a domain</li>
        <li>Understanding DNS dependency in Active Directory</li>
        <li>Planning basic OU and Group Policy structure</li>
        <li>Documenting infrastructure clearly for future reference</li>
      </ul>

      <h2>Planned Additions</h2>
      <ul>
        <li>Architecture diagram of the lab environment</li>
        <li>Screenshots of the domain controller and client VM</li>
        <li>DNS troubleshooting notes</li>
        <li>Group Policy examples</li>
        <li>PowerShell commands used during administration</li>
      </ul>
    </main>
  );
}