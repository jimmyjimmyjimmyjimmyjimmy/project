import React from 'react';
import {
  Button,
  ButtonToolbar,
  Card,
  CardBody,
  Col,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { SelectField } from '@/shared/components/form/Select';
import { emailPatter, urlPattern } from '@/shared/helpers';
import showResults from '@/utils/showResults';
import PasswordField from '@/shared/components/form/Password';
import { FormField } from './FormField';
import DragAndDropTable from '../DnDTable';

const Form = ({ isHorizontal, isAboveError }) => {
  const { t } = useTranslation('common');
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = data => showResults(data);

  return (
    <Col md={12} lg={12} xl={6}>
      <CardBody>
        <form className={`form ${isHorizontal && 'form--horizontal'}`} onSubmit={handleSubmit(onSubmit)}>
          <div className="form__form-group">
            <span className="form__form-group-label">ชื่อ</span>
            <div className="form__form-group-field">
              <FormField
                name="routeName"
                control={control}
                component="input"
                errors={errors}
                rules={{ required: 'This is required field' }}
                defaultValue=""
                isAboveError={isAboveError}
                placeholder="ชื่อเส้นทางิ่ง"
              />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">ระยะทาง</span>
            <div className="form__form-group-field">
              <FormField
                name="routeName"
                control={control}
                component="input"
                errors={errors}
                rules={{ required: 'This is required field' }}
                defaultValue=""
                isAboveError={isAboveError}
                placeholder="ระยะทาง (Km)"
              />
            </div>
          </div>

          <ButtonToolbar className="form__button-toolbar">
            <Button color="primary" type="submit">ยืนยัน</Button>
            <Button
              type="button"
              onClick={() => reset({
                username: '',
                email: '',
                url: '',
                password: '',
                select: '',
              })}
            >
              ยกเลิก
            </Button>
          </ButtonToolbar>
        </form>
      </CardBody>
    </Col>
  );
};

Form.propTypes = {
  isHorizontal: PropTypes.bool,
  isAboveError: PropTypes.bool,
};

Form.defaultProps = {
  isHorizontal: false,
  isAboveError: false,
};

export default Form;
