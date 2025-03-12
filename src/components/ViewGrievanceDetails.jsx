/* eslint-disable react-hooks/exhaustive-deps */
import { Autocomplete, Button, Grid2, TextField } from "@mui/material";
import { useEffect, useState } from "react";
// import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
// import { useToaster } from "src/context/TosterContext";
import FileUpload from "./FileUpload/FileUploadSingle";
import { FILE_INPUT } from "src/consts/common";
import { FaExternalLinkAlt } from "react-icons/fa";
import { grievanceCategory, grievanceStatus } from "src/consts/dropdown";

const ViewGrievanceDetails = ({ handleModules }) => {
  let formError = false;
  let isExecutive = true;
  // const { showToast } = useToaster();
  const [document, setDocument] = useState({
    file: null,
    error: "",
  });

  const formValues = {
    grievance_no: "GRV-2024-001",
    registration_date: "2024-03-15",
    insurance_company: { id: 1, name: "Example Insurance Co." },
    received_from: { id: 2, name: "Customer Service" },
    communication_type: { key: "EMAIL", name: "Email" },
    grievance_type: { id: 3, grievance_type: "Claim Dispute" },
    grievance_subtype: { id: 4, grievance_subtype: "Reimbursement Delay" },
    corporate_name: "ABC Corporation",
    policy_no: "POL12345",
    member_no: "MEM67890",
    claim_no: "CLM112233",
    member_name: "John Doe",
    employee_id: "EMP9876",
    phone_no: "1234567890",
    email: "john.doe@example.com",
    address: "123 Main St, Anytown",
    severity_type: { key: "HIGH", name: "High" },
    document: {
      file: new File(["dummy content"], "dummy.pdf", {
        type: "application/pdf",
      }),
      error: null,
    },
    remarks: "Customer complained about delayed reimbursement.",
  };

  //===================================
  // Create Form Schema Definitions
  //===================================
  //   const formSchema = z.object({
  //     ...grievanceSchema,
  //   });

  //=================================
  // React hook form handlers
  //=================================
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    // resolver: zodResolver(formSchema),
    mode: "onBlur",
  });

  //===========================================
  //  Submit Create Or Edit Department Form
  //===========================================
  const submitForm = async (formData) => {
    if (formError) return;
    formData.communication_type = formData.communication_type?.key;
    formData.severity_type = formData.severity_type?.key;
    formData.received_from = formData.received_from?.id;
    formData.grievance_type = formData.grievance_type?.id;
    formData.grievance_subtype = formData.grievance_subtype?.id;
    formData.document = document?.file;
    console.log("Form Data: ", formData);
  };
  // Middleware for form submit
  const submitFormHandler = (e) => {
    if (!document?.file) {
      setDocument((state) => ({ ...state, error: "Document Required" }));
      formError = true;
    }
    handleSubmit(submitForm)(e);
  };

  //===========================================
  // Fetch Initial Data
  //===========================================
  useEffect(() => {
    if (formValues) {
      Object.entries(formValues).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, [formValues, setValue]);

  return (
    <div>
      <div className="section-heading-row">
        <h3 className="section-heading">Grievance Details</h3>
        {/* <p></p> */}
      </div>
      <form onSubmit={submitFormHandler}>
        <div className="form-field-col-group">
          <div className="form-field-col">
            <label className="form-field-label">Grievance No </label>
            <div className="form-field-wrap">
              <Controller
                name="grievance_no"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      placeholder="Grievance Number"
                      className="field-input"
                      disabled
                    />
                    {errors?.grievance_no && (
                      <div className="field-input-error">
                        {errors?.grievance_no?.message}
                      </div>
                    )}
                  </>
                )}
              />
            </div>
          </div>

          <div className="form-field-col">
            <label className="form-field-label">Registration Date </label>
            <div className="form-field-wrap">
              <Controller
                name="registration_date"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <>
                    <input
                      type="date"
                      placeholder="Register Date"
                      className="field-input"
                      value={value}
                      onChange={onChange}
                      disabled
                    />
                    {errors?.registration_date && (
                      <div className="field-input-error">
                        {errors?.registration_date?.message}
                      </div>
                    )}
                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        format="DD/MM/YYYY"
                        value={value}
                        onChange={onChange}
                        disabled
                      />
                    </LocalizationProvider>
                    {errors?.registration_date && (
                      <div className="field-input-error">
                        {errors?.registration_date?.message}
                      </div>
                    )} */}
                  </>
                )}
              />
            </div>
          </div>

          <div className="form-field-col">
            <label className="form-field-label">
              Insurance Company <span style={{ color: "red" }}>*</span>
            </label>
            <div className="form-field-wrap">
              <Controller
                name="insurance_company"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    className="autosearch-select"
                    options={[]}
                    getOptionLabel={(option) => (option ? option.name : "")}
                    isOptionEqualToValue={(option, value) =>
                      option.id === value?.id
                    }
                    value={field?.value || null}
                    onChange={(e, val) => {
                      field.onChange(val);
                    }}
                    disabled
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        className=""
                        variant="outlined"
                        placeholder="Insurance Company"
                      />
                    )}
                  />
                )}
              />
              {errors?.insurance_company?.message && (
                <div className="field-input-error">
                  {errors?.insurance_company?.message}
                </div>
              )}
            </div>
          </div>

          <div className="form-field-col">
            <label className="form-field-label">
              Received From <span style={{ color: "red" }}>*</span>
            </label>
            <div className="form-field-wrap">
              <Controller
                name="received_from"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    className="autosearch-select"
                    options={[]}
                    getOptionLabel={(option) => (option ? option.name : "")}
                    isOptionEqualToValue={(option, value) =>
                      option.id === value?.id
                    }
                    value={field?.value || null}
                    onChange={(e, val) => {
                      field.onChange(val);
                    }}
                    disabled
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        className=""
                        variant="outlined"
                        placeholder="Received From"
                      />
                    )}
                  />
                )}
              />
              {errors?.received_from?.message && (
                <div className="field-input-error">
                  {errors?.received_from?.message}
                </div>
              )}
            </div>
          </div>
          <div className="form-field-col">
            <label className="form-field-label">
              Communication Type<span style={{ color: "red" }}>*</span>
            </label>
            <div className="form-field-wrap">
              <Controller
                name="communication_type"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    className="autosearch-select"
                    options={[]}
                    getOptionLabel={(option) => (option ? option.name : "")}
                    isOptionEqualToValue={(option, value) =>
                      option.key === value?.key
                    }
                    disabled
                    value={field?.value || null}
                    onChange={(e, val) => {
                      field.onChange(val);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        className=""
                        variant="outlined"
                        placeholder="Communication Type"
                      />
                    )}
                  />
                )}
              />
              {errors?.communication_type?.message && (
                <div className="field-input-error">
                  {errors?.communication_type?.message}
                </div>
              )}
            </div>
          </div>
          <div className="form-field-col">
            <label className="form-field-label">
              Grievance Type <span style={{ color: "red" }}>*</span>
            </label>
            <div className="form-field-wrap">
              <Controller
                name="grievance_type"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    className="autosearch-select"
                    options={[]}
                    getOptionLabel={(option) =>
                      option ? option.grievance_type : ""
                    }
                    isOptionEqualToValue={(option, value) =>
                      option.id === value?.id
                    }
                    value={field?.value || null}
                    onChange={(e, val) => {
                      field.onChange(val);
                    }}
                    disabled
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        className=""
                        variant="outlined"
                        placeholder="Grievance Type"
                      />
                    )}
                  />
                )}
              />
              {errors?.grievance_type && (
                <div className="field-input-error">
                  {errors?.grievance_type?.message}
                </div>
              )}
            </div>
          </div>
          <div className="form-field-col">
            <label className="form-field-label">
              Grievance Sub Type <span style={{ color: "red" }}>*</span>
            </label>
            <div className="form-field-wrap">
              <Controller
                name="grievance_subtype"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    className="autosearch-select"
                    options={[]}
                    getOptionLabel={(option) =>
                      option ? option.grievance_subtype : ""
                    }
                    isOptionEqualToValue={(option, value) =>
                      option.id === value?.id
                    }
                    value={field?.value || null}
                    onChange={(e, val) => {
                      field.onChange(val);
                    }}
                    disabled
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        className=""
                        variant="outlined"
                        placeholder="Grievance Sub Type"
                      />
                    )}
                  />
                )}
              />
              {errors?.grievance_subtype && (
                <div className="field-input-error">
                  {errors?.grievance_subtype?.message}
                </div>
              )}
            </div>
          </div>

          <div className="form-field-col">
            <label className="form-field-label">Corporate </label>
            <div className="form-field-wrap">
              <Controller
                name="corporate_name"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      placeholder="Corporate Name"
                      className="field-input"
                      disabled
                    />
                    {errors?.corporate_name && (
                      <div className="field-input-error">
                        {errors?.corporate_name?.message}
                      </div>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2 }}
                      onClick={() =>
                        handleModules({
                          moduleName: "corporate",
                          moduleId: "3",
                        })
                      }
                    >
                      View Corporate Details
                    </Button>
                  </>
                )}
              />
            </div>
          </div>

          <div className="form-field-col">
            <label className="form-field-label">Policy No </label>
            <div className="form-field-wrap">
              <Controller
                name="policy_no"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      placeholder="Policy Number"
                      className="field-input"
                      disabled
                    />
                    {errors?.policy_no && (
                      <div className="field-input-error">
                        {errors?.policy_no?.message}
                      </div>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2 }}
                      onClick={() =>
                        handleModules({ moduleName: "policy", moduleId: "1" })
                      }
                    >
                      View Policy Details
                    </Button>
                  </>
                )}
              />
            </div>
          </div>
          <div className="form-field-col">
            <label className="form-field-label">Member No</label>
            <div className="form-field-wrap">
              <Controller
                name="member_no"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      placeholder="Member Number"
                      className="field-input"
                      disabled
                    />
                    {errors?.member_no && (
                      <div className="field-input-error">
                        {errors?.member_no?.message}
                      </div>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2 }}
                      onClick={() =>
                        handleModules({
                          moduleName: "enrollment",
                          moduleId: "2",
                        })
                      }
                    >
                      View Enrollment Details
                    </Button>
                  </>
                )}
              />
            </div>
          </div>
          <div className="form-field-col">
            <label className="form-field-label">Claim No </label>
            <div className="form-field-wrap">
              <Controller
                name="claim_no"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      placeholder="Claim Number"
                      className="field-input"
                      disabled
                    />
                    {errors?.claim_no && (
                      <div className="field-input-error">
                        {errors?.claim_no?.message}
                      </div>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2 }}
                      onClick={() =>
                        handleModules({
                          moduleName: "calculation",
                          moduleId: "4",
                        })
                      }
                    >
                      View Calculation Sheet
                    </Button>
                  </>
                )}
              />
            </div>
          </div>
          <div className="form-field-col">
            <label className="form-field-label">Member Name</label>
            <div className="form-field-wrap">
              <Controller
                name="member_name"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      placeholder="Member Name"
                      className="field-input"
                      disabled
                    />
                    {errors?.member_name && (
                      <div className="field-input-error">
                        {errors?.member_name?.message}
                      </div>
                    )}
                  </>
                )}
              />
            </div>
          </div>

          <div className="form-field-col">
            <label className="form-field-label">Employee Id</label>
            <div className="form-field-wrap">
              <Controller
                name="employee_id"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      placeholder="Employee Id"
                      className="field-input"
                      disabled
                    />
                    {errors?.employee_id && (
                      <div className="field-input-error">
                        {errors?.employee_id?.message}
                      </div>
                    )}
                  </>
                )}
              />
            </div>
          </div>

          <div className="form-field-col">
            <label className="form-field-label">Phone No</label>
            <div className="form-field-wrap">
              <Controller
                name="phone_no"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      placeholder="Phone Number"
                      type="number"
                      className="field-input"
                      disabled
                    />
                    {errors?.phone_no && (
                      <div className="field-input-error">
                        {errors?.phone_no?.message}
                      </div>
                    )}
                  </>
                )}
              />
            </div>
          </div>
          <div className="form-field-col">
            <label className="form-field-label">Email</label>
            <div className="form-field-wrap">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      placeholder="Email"
                      className="field-input"
                      disabled
                    />
                    {errors?.email && (
                      <div className="field-input-error">
                        {errors?.email?.message}
                      </div>
                    )}
                  </>
                )}
              />
            </div>
          </div>

          <div className="form-field-col">
            <label className="form-field-label">Member Address</label>
            <div className="form-field-wrap">
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      placeholder="Member Address"
                      className="field-input"
                      disabled
                    />
                    {errors?.address && (
                      <div className="field-input-error">
                        {errors?.address?.message}
                      </div>
                    )}
                  </>
                )}
              />
            </div>
          </div>

          <div className="form-field-col">
            <label className="form-field-label">
              Severity Type <span style={{ color: "red" }}>*</span>
            </label>
            <div className="form-field-wrap">
              <Controller
                name="severity_type"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    className="autosearch-select"
                    options={[]}
                    getOptionLabel={(option) => (option ? option.name : "")}
                    isOptionEqualToValue={(option, value) =>
                      option.key === value?.key
                    }
                    value={field?.value || null}
                    onChange={(e, val) => {
                      field.onChange(val);
                    }}
                    disabled
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        className=""
                        variant="outlined"
                        placeholder="Severity Type"
                      />
                    )}
                  />
                )}
              />
              {errors?.severity_type && (
                <div className="field-input-error">
                  {errors?.severity_type?.message}
                </div>
              )}
            </div>
          </div>

          <div className="form-field-col">
            <label className="form-field-label">Document </label>
            <div className="form-field-wrap">
              <FileUpload
                filetype={FILE_INPUT?.IMAGES_PDF}
                setFileInfoState={setDocument}
                isDisabled
              />
              {/* {document?.error && (
                <div className="field-input-error">{document?.error}</div>
              )} */}

              <div className="pdf-preview">
                {/*  style={{ marginTop: "10px", display: 'flex', gap: '50px', alignItems: 'center', fontSize: '12px', color: 'gray' }} */}
                {/* View Pdf: */}
                <img src="/images/pdf-icon.svg" />
                <a
                  className="pdf-link"
                  href={
                    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>

              {/* Preview Uploaded Document */}
              {document?.file && document?.file.type.startsWith("image/") && (
                <img
                  src={URL.createObjectURL(document?.file)}
                  alt="Uploaded"
                  style={{
                    height: "120px",
                    width: "200px",
                    marginTop: "10px",
                    borderRadius: "5px",
                  }}
                  width={200}
                />
              )}

              {document?.file && document?.file.type === "application/pdf" && (
                <div className="pdf-preview">
                  {/*  style={{ marginTop: "10px", display: 'flex', gap: '50px', alignItems: 'center', fontSize: '12px', color: 'gray' }} */}
                  {/* View Pdf: */}
                  <img src="../images/pdf-icon.svg" />
                  <a
                    className="pdf-link"
                    href={URL.createObjectURL(document?.file)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="form-field-col">
            <label className="form-field-label">
              Remarks <span style={{ color: "red" }}>*</span>{" "}
            </label>
            <div className="form-field-wrap">
              <Controller
                name="remarks"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      placeholder="Remarks"
                      className="field-input"
                      disabled
                    />
                    {errors?.address && (
                      <div className="field-input-error">
                        {errors?.address?.message}
                      </div>
                    )}
                  </>
                )}
              />
            </div>
          </div>
        </div>

        {isExecutive && (
          <>
            <div className="section-heading-row">
              <h3 className="section-heading">Grievance Review</h3>
            </div>
            <Grid2 container spacing={{ xs: 1.5 }}>
              <Grid2 size={{ md: 3, xs: 12 }} className="form-field-col">
                <label className="form-field-label">
                  Grievance Category <span style={{ color: "red" }}>*</span>
                </label>
                <div className="form-field-wrap">
                  <Controller
                    name="grievance_category"
                    control={control}
                    render={({ field }) => (
                      <Autocomplete
                        {...field}
                        className="autosearch-select"
                        options={grievanceCategory || []}
                        getOptionLabel={(option) => (option ? option.name : "")}
                        isOptionEqualToValue={(option, value) =>
                          option.id === value?.id
                        }
                        value={field?.value || null}
                        onChange={(e, val) => {
                          field.onChange(val);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            className=""
                            variant="outlined"
                            placeholder="Grievance Category"
                          />
                        )}
                      />
                    )}
                  />
                  {errors?.grievance_category && (
                    <div className="field-input-error">
                      {errors?.grievance_category?.message}
                    </div>
                  )}
                </div>
              </Grid2>
              <Grid2 size={{ md: 3, xs: 12 }} className="form-field-col">
                <label className="form-field-label">
                  Grievance Status <span style={{ color: "red" }}>*</span>
                </label>
                <div className="form-field-wrap">
                  <Controller
                    name="grievance_sub_category"
                    control={control}
                    render={({ field }) => (
                      <Autocomplete
                        {...field}
                        className="autosearch-select"
                        options={grievanceStatus || []}
                        getOptionLabel={(option) => (option ? option.name : "")}
                        isOptionEqualToValue={(option, value) =>
                          option.id === value?.id
                        }
                        value={field?.value || null}
                        onChange={(e, val) => {
                          field.onChange(val);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            className=""
                            variant="outlined"
                            placeholder="Grievance Status"
                          />
                        )}
                      />
                    )}
                  />
                  {errors?.grievance_sub_category && (
                    <div className="field-input-error">
                      {errors?.grievance_sub_category?.message}
                    </div>
                  )}
                </div>
              </Grid2>
              <Grid2 size={{ xs: 12 }} className="form-field-col">
                <label className="form-field-label">
                  Review Remarks <span style={{ color: "red" }}>*</span>{" "}
                </label>
                <div className="form-field-wrap">
                  <textarea
                    {...register("review")}
                    placeholder="Review Remarks"
                    className="field-input"
                  />
                  {errors?.review && (
                    <div className="field-input-error">
                      {errors?.review?.message}
                    </div>
                  )}
                </div>
              </Grid2>
            </Grid2>
            <div className="form-action-row">
              <Button
                type="submit"
                loadingPosition="start"
                variant="contained"
                className="admin-primary-button"
              >
                <span>Submit</span>
              </Button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default ViewGrievanceDetails;
