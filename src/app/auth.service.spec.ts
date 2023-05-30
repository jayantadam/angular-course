import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { AuthService } from "./auth.service";
import {
  TestBed,
  waitForAsync,
  fakeAsync,
  inject,
} from "@angular/core/testing";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

xdescribe("AuthService", () => {
  let service: AuthService;
  let httpController: HttpTestingController;

  let url = "https://nd0g1j-4200.csb.app";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it("login api", () => {
    let request = {
      username: "cristiano",
      password: "ronaldo",
    };
    service.login(request).subscribe((res) => {
      expect(res).toEqual(request);
    });

    const valueServiceSpy = jasmine.createSpyObj(AuthService, ["login"]);

    const stubValue = "stub value";

    valueServiceSpy.login(request).and.returnValue(stubValue);
  });
});
