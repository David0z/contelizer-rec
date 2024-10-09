import { mount, VueWrapper } from "@vue/test-utils";
import PeselValidator from "../PeselValidator.vue";
import { describe, it, expect, beforeEach } from "vitest";

const errorMessageShort = "PESEL musi składać się z 11 cyfr.";
const errorMessageInvalid = "Nieprawidłowy numer PESEL.";

interface PeselValidatorInstance {
  peselInput: string;
  error: string | null;
  validPesel: boolean;
  validatePesel: () => void;
}

const testCases = [
  {input: '64042999928', expectedError: null, valid: true},
  {input: '52022114478', expectedError: null, valid: true},
  {input: '72021706812', expectedError: null, valid: true},
  {input: '80042448774', expectedError: null, valid: true},
  {input: '97031003029', expectedError: null, valid: true},
  {input: '97031003021', expectedError: errorMessageInvalid, valid: false},
  {input: '97031003023', expectedError: errorMessageInvalid, valid: false},
  {input: '', expectedError: errorMessageShort, valid: false},
  {input: '970310030231111', expectedError: errorMessageShort, valid: false},
]

describe("PeselValidator.vue", () => {
  let wrapper: VueWrapper<PeselValidatorInstance>;

  beforeEach(() => {
    wrapper = mount(PeselValidator) as VueWrapper<PeselValidatorInstance>;
  });

  testCases.forEach(({input, expectedError, valid}) => {
    it(`validates PESEL "${input}" correctly`, async () => {
      wrapper.vm.peselInput = input;
      wrapper.vm.validatePesel();
      expect(wrapper.vm.error).toBe(expectedError);
      expect(wrapper.vm.validPesel).toBe(valid);
    });
  })
});
