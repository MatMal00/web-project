import './style.css';
import { ApiService } from './scripts/api.ts';
import { Navigator } from './scripts/navigator.ts';

class ProjectManager {
  private projectApi = new ApiService('');
  private navigator;

  constructor() {
    this.navigator = new Navigator(false);
  }
}

new ProjectManager();
