export class Navigator {
  private currentSection: HTMLElement | null = null;

  constructor(isLoggedIn: boolean) {
    this.bindNavigation();
    isLoggedIn ? this.navigateTo('menu') : this.navigateTo('login');
  }

  private bindNavigation(): void {
    document.getElementById('navLogin')?.addEventListener('click', () => this.navigateTo('login'));
    document.getElementById('navMenu')?.addEventListener('click', () => this.navigateTo('menu'));
    document.getElementById('navDashboard')?.addEventListener('click', () => this.navigateTo('dashboard'));
  }

  navigateTo(sectionId: string): void {
    if (this.currentSection) {
      this.currentSection.style.display = 'none';
    }

    const section = document.getElementById(sectionId);

    if (section) {
      section.style.display = 'block';
      this.currentSection = section;
    }
  }
}
