import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { Button, Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from 'react';
import { useToaster } from 'src/context/TosterContext';
import { severityOptions, communicationTypeOptions } from 'src/consts/dropdown';
import REGEX from 'src/consts/regex';
import useDependencyStore from 'src/store/useDependencyStore';
import BackDropLoader from 'src/components/loaders/BackDropLoader';
import useGrievancetore from 'src/store/useGrievanceStore';
import { FILE_INPUT, TOAST_TYPE } from 'src/consts/common';
import FileUpload from 'src/components/FileUpload/FileUploadSingle';
import { FaExternalLinkAlt } from "react-icons/fa";
import useCommonStore from 'src/store/useCommonStore';

const grievanceSchema = {
  received_from: z.object({
    id: z.number().optional(),
    name: z.string().optional(),
  }, { message: 'Please provide received from.' }),
  communication_type: z.object({
    key: z.string().optional(),
    name: z.string().optional(),
  }, { message: 'Please provide communication type.' }),
  grievance_type: z.object({
    id: z.number().optional(),
    grievance_type: z.string().optional(),
  }, { message: 'Please provide grievance type.' }),
  grievance_subtype: z.object({
    id: z.number().optional(),
    grievance_subtype: z.string().optional(),
  }, { message: 'Please provide grievance sub type.' }),
  policy_no: z.string()
    .min(1, { message: 'Please provide policy number.' })
    .max(20, { message: 'Policy number must not exceed 20 characters.' })
    .regex(REGEX.ALPHA_NUM, { message: 'Please enter a valid alphanumeric policy number.' }),
  member_no: z.string()
    .min(1, { message: 'Please provide member number.' })
    .max(20, { message: 'Member number must not exceed 20 characters.' })
    .regex(REGEX.ALPHA_NUM, { message: 'Please enter a valid alphanumeric member number.' }),
  claim_no: z.string()
    .min(1, { message: 'Please provide claim number.' })
    .max(20, { message: 'Claim number must not exceed 20 characters.' })
    .regex(REGEX.ALPHA_NUM, { message: 'Please enter a valid alphanumeric claim number.' }),
  member_name: z.string()
    .min(1, { message: 'Please provide member name.' })
    .max(100, { message: 'Member name must not exceed 100 characters.' })
    .regex(REGEX.ALPHA_NUM_SPACE, { message: 'Please enter a valid member name.' }),
  phone_no: z.string()
    .min(1, { message: 'Please provide phone number.' })
    .regex(REGEX.INDIAN_PHONE, { message: 'Please enter a valid number.' }),
  email: z.string()
    .min(1, { message: 'Please provide member name.' })
    .max(100, { message: 'Email name must not exceed 100 characters.' })
    .regex(REGEX.EMAIL, { message: 'Please enter a valid email id.' }),
  severity_type: z.object({
    key: z.string().optional(),
    name: z.string().optional(),
  }, { message: 'Please provide severity type.' }),
  address: z.string()
    .min(1, { message: 'Please provide member address.' })
    .max(255, { message: 'Member address name must not exceed 255 characters.' })
    .regex(REGEX.ADDRESS, { message: 'Please enter a valid address.' }),
  remarks: z.string()
    .min(1, { message: 'Please provide remarks.' })
}

const GrievanceAddEdit = () => {

  //===================================
  // Component States And Dependencies
  //===================================
  const pageName = window.location.href.includes("view") ? 'View' : 'Register';
  const viewMode = window.location.href.includes("view");
  console.log("View Mode: ", viewMode)
  let formError = false;
  const { showToast } = useToaster();
  const [document, setDocument] = useState({
    file: null,
    error: ''
  })
  const {
    loading, emptyGrievanceSubTypes, grievanceTypes, grievanceSubTypes, grievanceReceivedFromList,
    fetchGrievanceType, fetchGrievanceSubType, fetchGrievanceReceiveFromList
  } = useDependencyStore();
  const {
    loading: grievanceLoading, createGrievance
  } = useGrievancetore();
  const { setShowResponseModal } = useCommonStore();

  //===================================
  // Create Form Schema Definitions
  //===================================
  const formSchema = z.object({
    // ...grievanceSchema
  })

  //=================================
  // React hook form handlers
  //=================================
  const { register, handleSubmit, formState: { errors }, control, watch, setValue } = useForm({
    resolver: zodResolver(formSchema),
    mode: 'onBlur'
  });
  const watchGrievanceType = watch('grievance_type');

  //===========================================
  //  Submit Create Or Edit Department Form
  //===========================================
  const submitForm = async (formData) => {
    // if(formError) return;
    // formData.communication_type = formData.communication_type?.key
    // formData.severity_type = formData.severity_type?.key
    // formData.received_from = formData.received_from?.id
    // formData.grievance_type = formData.grievance_type?.id
    // formData.grievance_subtype = formData.grievance_subtype?.id
    // formData.document = document?.file;
    // console.log("Form Data: ", formData)
    // createGrievance(formData, showToast)
    setShowResponseModal(TOAST_TYPE.SUCCESS, 'Grievance Registration Successful!', `Your Grievance number is ${"GRINIC2021548"}. Please Save your Grievance number for your future reference.`, '/grievance')
  }
  // Middleware for form submit
  const submitFormHandler = (e) => {
    // if(!document?.file){
    //   setDocument((state)=>({...state, error:'Document Required'}))
    //   formError = true;
    // }
    handleSubmit(submitForm)(e);
  }

  //===========================================
  // Fetch Initial Data
  //===========================================
  useEffect(() => {
    // (async () => {
    //   const promiseApis = [fetchGrievanceType(showToast)]
    //   if (Array.isArray(grievanceReceivedFromList) && grievanceReceivedFromList.length === 0) {
    //     promiseApis.push(fetchGrievanceReceiveFromList(showToast))
    //   }
    //   await Promise.all(promiseApis)
    // })();
  }, [])

  //Insight: Logic for handling grievance subtype when grievance type changes 
  // useEffect(() => {
  //   setValue('grievance_subtype', null)
  //   if (watchGrievanceType?.id) {
  //     fetchGrievanceSubType(watchGrievanceType?.id, showToast)
  //   }
  //   else {
  //     emptyGrievanceSubTypes();
  //   }
  // }, [watchGrievanceType])

  return (
    <>
      <div className="section-heading-row">
        <h3 className="section-heading">{pageName} Grievance</h3>
      </div>
      <form onSubmit={submitFormHandler} >
        <div className="form-field-col-group">
          {
            viewMode
            &&
            <>
              <div className="form-field-col">
                <label className="form-field-label">Grievance Number</label>
                <div className="form-field-wrap">
                  <input
                    // {...register('policy_no')}
                    placeholder='Corporate'
                    className="field-input"
                    value={viewMode ? 'GRINIC2021548' : null}
                    disabled={viewMode}
                  />
                  {errors?.policy_no && <div className="field-input-error">{errors?.policy_no?.message}</div>}
                </div>
              </div>
              <div className="form-field-col">
                <label className="form-field-label">Registration Date</label>
                <div className="form-field-wrap">
                  <input
                    // {...register('policy_no')}
                    type='date'
                    placeholder='Corporate'
                    className="field-input"
                    value={viewMode ? '2024-05-21' : null}
                    disabled={viewMode}
                  />
                  {errors?.policy_no && <div className="field-input-error">{errors?.policy_no?.message}</div>}
                </div>
              </div>
            </>
          }
          <div className="form-field-col">
            <label className="form-field-label">Insurance Company <span style={{ color: "red" }}>*</span></label>
            <div className="form-field-wrap">
              <Controller
                name="received_from"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    className="autosearch-select"
                    options={grievanceReceivedFromList || []}
                    getOptionLabel={(option) => option ? option.name : ''}
                    isOptionEqualToValue={(option, value) => option.id === value?.id}
                    value={viewMode ? { id: "1", name: 'NIC' } : null}
                    disabled={viewMode}
                    onChange={(e, val) => {
                      field.onChange(val);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        className=''
                        variant="outlined"
                        placeholder="Received From"
                      />
                    )}
                  />
                )}
              />
              {errors?.received_from?.message && <div className="field-input-error">{errors?.received_from?.message}</div>}
            </div>
          </div>
          <div className="form-field-col">
            <label className="form-field-label">Received From <span style={{ color: "red" }}>*</span></label>
            <div className="form-field-wrap">
              <Controller
                name="received_from"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    className="autosearch-select"
                    options={grievanceReceivedFromList || []}
                    getOptionLabel={(option) => option ? option.name : ''}
                    isOptionEqualToValue={(option, value) => option.id === value?.id}
                    value={viewMode ? { id: "1", name: 'Company' } : null}
                    onChange={(e, val) => {
                      field.onChange(val);
                    }}
                    disabled={viewMode}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        className=''
                        variant="outlined"
                        placeholder="Received From"
                      />
                    )}
                  />
                )}
              />
              {errors?.received_from?.message && <div className="field-input-error">{errors?.received_from?.message}</div>}
            </div>
          </div>
          <div className="form-field-col">
            <label className="form-field-label">Communication Type<span style={{ color: "red" }}>*</span></label>
            <div className="form-field-wrap">
              <Controller
                name="communication_type"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    className="autosearch-select"
                    options={communicationTypeOptions || []}
                    getOptionLabel={(option) => option ? option.name : ''}
                    isOptionEqualToValue={(option, value) => option.key === value?.key}
                    value={viewMode ? { id: "1", name: 'Online' } : null}
                    disabled={viewMode}
                    onChange={(e, val) => {
                      field.onChange(val);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        className=''
                        variant="outlined"
                        placeholder="Communication Type"
                      />
                    )}
                  />
                )}
              />
              {errors?.communication_type?.message && <div className="field-input-error">{errors?.communication_type?.message}</div>}
            </div>
          </div>
          <div className="form-field-col">
            <label className="form-field-label">Grievance Type <span style={{ color: "red" }}>*</span></label>
            <div className="form-field-wrap">
              <Controller
                name="grievance_type"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    className="autosearch-select"
                    options={grievanceTypes || []}
                    getOptionLabel={(option) => option ? option.grievance_type : ''}
                    isOptionEqualToValue={(option, value) => option.id === value?.id}
                    value={viewMode ? { id: "1", grievance_type: 'Client' } : null}
                    disabled={viewMode}
                    onChange={(e, val) => {
                      field.onChange(val);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        className=''
                        variant="outlined"
                        placeholder="Grievance Type"
                      />
                    )}
                  />
                )}
              />
              {errors?.grievance_type && <div className="field-input-error">{errors?.grievance_type?.message}</div>}
            </div>
          </div>
          <div className="form-field-col">
            <label className="form-field-label">Grievance Sub Type <span style={{ color: "red" }}>*</span></label>
            <div className="form-field-wrap">
              <Controller
                name="grievance_subtype"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    className="autosearch-select"
                    options={grievanceSubTypes || []}
                    getOptionLabel={(option) => option ? option.grievance_subtype : ''}
                    isOptionEqualToValue={(option, value) => option.id === value?.id}
                    value={viewMode ? { id: "1", grievance_subtype: 'Claim Rejected' } : null}
                    disabled={viewMode}
                    onChange={(e, val) => {
                      field.onChange(val);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        className=''
                        variant="outlined"
                        placeholder="Grievance Sub Type"
                      />
                    )}
                  />
                )}
              />
              {errors?.grievance_subtype && <div className="field-input-error">{errors?.grievance_subtype?.message}</div>}
            </div>
          </div>
          <div className="form-field-col">
            <label className="form-field-label">Corporate</label>
            <div className="form-field-wrap">
              <input
                // {...register('policy_no')}
                placeholder='Corporate'
                className="field-input"
                value={viewMode ? 'IBA' : null}
                disabled={viewMode}
              />
              {errors?.policy_no && <div className="field-input-error">{errors?.policy_no?.message}</div>}
            </div>
          </div>
          <div className="form-field-col">
            <label className="form-field-label">Policy No </label>
            <div className="form-field-wrap">
              <input
                // {...register('policy_no')}
                placeholder='Policy Number'
                className="field-input"
                value={viewMode ? '89378290' : null}
                disabled={viewMode}
              />
              {errors?.policy_no && <div className="field-input-error">{errors?.policy_no?.message}</div>}
            </div>
          </div>
          <div className="form-field-col">
            <label className="form-field-label">Member No</label>
            <div className="form-field-wrap">
              <input
                // {...register('member_no')}
                placeholder='Member Number'
                className="field-input"
                value={viewMode ? '98760' : null}
                disabled={viewMode}
              />
              {errors?.member_no && <div className="field-input-error">{errors?.member_no?.message}</div>}
            </div>
          </div>
          <div className="form-field-col">
            <label className="form-field-label">Claim No </label>
            <div className="form-field-wrap">
              <input
                // {...register('claim_no')}
                placeholder='Claim Number'
                className="field-input"
                value={viewMode ? '376890' : null}
                disabled={viewMode}
              />
              {errors?.claim_no && <div className="field-input-error">{errors?.claim_no?.message}</div>}
            </div>
          </div>
          <div className="form-field-col">
            <label className="form-field-label">Member Name</label>
            <div className="form-field-wrap">
              <input
                // {...register('member_name')}
                placeholder='Member Name'
                className="field-input"
                value={viewMode ? 'Rudranil Barman' : null}
                disabled={viewMode}
              />
              {errors?.member_name && <div className="field-input-error">{errors?.member_name?.message}</div>}
            </div>
          </div>
          <div className="form-field-col">
            <label className="form-field-label">Employee ID</label>
            <div className="form-field-wrap">
              <input
                // {...register('phone_no')}
                placeholder='Employee ID'
                // type='number'
                className="field-input"
                value={viewMode ? 'EMP8912' : null}
                disabled={viewMode}
              />
              {errors?.phone_no && <div className="field-input-error">{errors?.phone_no?.message}</div>}
            </div>
          </div>
          <div className="form-field-col">
            <label className="form-field-label">Phone No</label>
            <div className="form-field-wrap">
              <input
                {...register('phone_no')}
                placeholder='Phone Number'
                type='number'
                className="field-input"
                value={viewMode ? '8918931752' : null}
                disabled={viewMode}
              />
              {errors?.phone_no && <div className="field-input-error">{errors?.phone_no?.message}</div>}
            </div>
          </div>
          <div className="form-field-col">
            <label className="form-field-label">Email</label>
            <div className="form-field-wrap">
              <input
                // {...register('email')}
                placeholder='Email'
                className="field-input"
                value={viewMode ? 'user@yopmail.com' : null}
                disabled={viewMode}
              />
              {errors?.email && <div className="field-input-error">{errors?.email?.message}</div>}
            </div>
          </div>
          {/* <div className="form-field-col">
            <label className="form-field-label">Severity Type  <span style={{ color: "red" }}>*</span></label>
            <div className="form-field-wrap">
              <Controller
                name="severity_type"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    className="autosearch-select"
                    options={severityOptions || []}
                    getOptionLabel={(option) => option ? option.name : ''}
                    isOptionEqualToValue={(option, value) => option.key === value?.key}
                    value={field?.value || null}
                    onChange={(e, val) => {
                      field.onChange(val);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        className=''
                        variant="outlined"
                        placeholder="Severity Type"
                      />
                    )}
                  />
                )}
              />
              {errors?.severity_type && <div className="field-input-error">{errors?.severity_type?.message}</div>}
            </div>
          </div> */}
          <div className="form-field-col">
            <label className="form-field-label">Address</label>
            <div className="form-field-wrap">
              <input
                // {...register('address')}
                placeholder='Member Address'
                className="field-input"
                value={viewMode ? 'LA Street, India' : null}
                disabled={viewMode}
              />
              {errors?.address && <div className="field-input-error">{errors?.address?.message}</div>}
            </div>
          </div>
          <div className="form-field-col">
            <label className="form-field-label">Document </label>
            <div className="form-field-wrap">
              <FileUpload
                filetype={FILE_INPUT?.IMAGES_PDF}
                setFileInfoState={setDocument}
                isDisabled={viewMode}
              />
              {document?.error && <div className="field-input-error">{document?.error}</div>}

              {/* Preview Uploaded Document */}
              {viewMode && (
                <div className="pdf-preview">
                  {/*  style={{ marginTop: "10px", display: 'flex', gap: '50px', alignItems: 'center', fontSize: '12px', color: 'gray' }} */}
                  {/* View Pdf: */}
                  <img src="/images/pdf-icon.svg" />
                  <a className="pdf-link" href={"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              )}

              {document?.file && document?.file.type === "application/pdf" && (
                <div className="pdf-preview">
                  {/*  style={{ marginTop: "10px", display: 'flex', gap: '50px', alignItems: 'center', fontSize: '12px', color: 'gray' }} */}
                  {/* View Pdf: */}
                  <img src="/images/pdf-icon.svg" />
                  <a className="pdf-link" href={URL.createObjectURL(document?.file)} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="form-field-col">
            <label className="form-field-label">Remarks <span style={{ color: "red" }}>*</span> </label>
            <div className="form-field-wrap">
              <textarea
                // {...register('remarks')}
                placeholder='Remarks'
                className="field-input"
                value={viewMode ? 'Needs attention' : null}
                disabled={viewMode}
              />
              {errors?.remarks && <div className="field-input-error">{errors?.remarks?.message}</div>}
            </div>
          </div>
        </div>
        {
          !viewMode
          &&
          <div className="form-action-row">
            <div type="submit" className="admin-primary-button" style={{ visibility: 'hidden' }}>Submit</div>
            <Button
              type='submit'
              loading={grievanceLoading}
              loadingPosition="start"
              variant="contained"
              className="admin-primary-button"
            >
              <span>Register</span>
            </Button>
          </div>
        }
      </form>
      {
        loading
        &&
        <BackDropLoader />
      }
    </>
  );
};

export default GrievanceAddEdit;
