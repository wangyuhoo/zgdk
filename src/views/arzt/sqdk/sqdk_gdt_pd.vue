<template>
  <div class="main">
    <div class="header">
      <img src="http://upload.cg0.me/arzt/arzt_dk.jpg">
    </div>
    <el-row style="margin: 10px 0px;text-align: center;position: relative;">
      <el-col :span="7"><img style="height: 25px;width:auto;position: relative;" src="http://upload.cg0.me/arzt/fill.png" alt="申请">
        <span style="position: absolute;top: 3px;margin-left: 5px;">申请</span>
      </el-col>
      <el-col :span="8"><img style="height: 25px;width:auto;position: relative;" src="http://upload.cg0.me/arzt/tel.png" alt="审核">
        <span style="position: absolute;top: 3px;margin-left: 5px;">审核</span>
      </el-col>
      <el-col :span="8"><img style="height: 25px;width:auto;position: relative;" src="http://upload.cg0.me/arzt/res.png" alt="放款">
        <span style="position: absolute;top: 3px;margin-left: 5px;">放款</span>
      </el-col>
    </el-row>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="110px" class="form" label-position="left">
      <el-form-item label="金额(万元)" prop="dk_money">
        <el-input v-model="ruleForm.dk_money" placeholder="请输入贷款金额" type="number"></el-input>
      </el-form-item>
      <el-form-item label=还款周期 prop="dk_month">
        <el-radio-group v-model="ruleForm.dk_month">
          <el-radio label="6个月"></el-radio>
          <el-radio label="12个月"></el-radio>
          <el-radio label="48个月"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="您的姓名" prop="dk_name">
        <el-input v-model="ruleForm.dk_name" placeholder="请输入您的姓名"></el-input>
      </el-form-item>
      <el-form-item label="您的手机" prop="dk_phone">
        <el-input v-model="ruleForm.dk_phone" placeholder="请输入您的手机号码" type="number"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="dk_code">
        <el-input v-model="ruleForm.dk_code" style="width: 100px;margin-right: 20px;" placeholder="请输入验证码" type="number"></el-input>
        <el-button type="primary" @click="doSendVerify('ruleForm')">发验证码</el-button>
      </el-form-item>
      <el-form-item label="您的职业" prop="dk_profession">
        <el-select v-model="ruleForm.dk_profession" placeholder="请选择您的职业类型" style="display: block;">
          <el-option label="上班族" value="上班族"></el-option>
          <el-option label="个体户" value="个体户"></el-option>
          <el-option label="无固定职业" value="无固定职业"></el-option>
          <el-option label="企业主" value="企业主"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="月收入" prop="dk_salary">
        <el-select v-model="ruleForm.dk_salary" placeholder="每月收入" style="display: block;">
          <el-option label="0-5000" value="0-5000"></el-option>
          <el-option label="5000-10000" value="5000-10000"></el-option>
          <el-option label="10000以上" value="10000以上"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="发薪方式" prop="dk_salary_way">
        <el-select v-model="ruleForm.dk_salary_way" placeholder="请选择您的发薪方式" style="display: block;">
          <el-option label="银行转账" value="银行转账"></el-option>
          <el-option label="现金发薪" value="现金发薪"></el-option>
        </el-select>
      </el-form-item>
      <!--<el-form-item label="身份证号" prop="dk_id_card">-->
        <!--<el-input v-model="ruleForm.dk_id_card" placeholder="请输入您的身份证号"></el-input>-->
      <!--</el-form-item>-->
      <el-alert
        title="选择附属信息,提高您的贷款成功率(可多选)"
        type="info">
      </el-alert>
      <el-form-item label="附属信息" prop="dk_extra">
        <el-checkbox-group v-model="ruleForm.dk_extra">
          <el-checkbox label="有社保" name="type"></el-checkbox>
          <el-checkbox label="有公积金" name="type"></el-checkbox>
          <el-checkbox label="有信用卡" name="type"></el-checkbox>
          <el-checkbox label="有寿险保单" name="type"></el-checkbox>
          <el-checkbox label="有房" name="type"></el-checkbox>
          <el-checkbox label="有车" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="submitForm('ruleForm')" style="background: #f74e61;border: none;width: 80%;margin: 0px 10%;height: 40px;">预约借款</el-button>
    <div>
      <div class="stats">
        <!--出资主体(包括但不限于):平安银行 <br>根据审核结果不同额度不同<br>-->
      </div>
      <div class="stats_bottom">
        免责声明：此网站仅提供信息咨询类服务，不提供贷款服务，不承担相关法律责任，网民所产生的站外任何交易与此网站无关，责任由网民自己承担。特此声明<br/>
        温馨提醒：市场有风险，选择需谨慎<br/>
        1.近期诈骗案件高发，需提高安全意识，谨防上当受骗<br/>
        2.放款机构视个人征信情况而定。以实际放款机构为准<br/>
        特别提醒：网民在贷款过程中谨慎校验贷款提供方或中间服务商的资质，为保证您的资金安全，请不要相信任何要求您支付费用的信息、邮件、电话等不实信息，在成功贷款前，请勿打款给任何贷款机构或个人。<br/>
        浦东银行<br/>
      </div>
    </div>
  </div>
</template>

<script>
  import {Indicator, Toast,MessageBox} from 'mint-ui';
  import VideoComponent from '@/components/Video'
  import {
    Form,
    Input,
    FormItem,
    RadioGroup,
    Checkbox,
    CheckboxGroup,
    Col,
    Button,
    Select,
    Option,
    Alert,
    Radio,
    Row,
  } from 'element-ui';
  import {sendSms, sqdk} from "@/api/arzt";

  export default {
    name: 'Video',
    components: {
      VideoComponent,
      'el-form': Form,
      'el-input': Input,
      'el-button': Button,
      'el-radio-group': RadioGroup,
      'el-checkbox': Checkbox,
      'el-checkbox-group': CheckboxGroup,
      'el-form-item': FormItem,
      'el-col': Col,
      'el-row': Row,
      'el-select': Select,
      'el-option': Option,
      'el-alert': Alert,
      'el-radio': Radio,
    },
    data() {
      return {
        goodsInfo: [],
        options: undefined,
        changePrimary: 0,
        ruleForm: {
          dk_from: 'default',
          dk_month: '',
          dk_money: 10,
          dk_name: '',
          dk_phone: '',
          dk_code: '',
          dk_profession: '',
          dk_salary: '',
          dk_salary_way: '',
          dk_id_card: 0,
          dk_extra: [],
        },
        rules: {
          dk_month: [
            {required: true, message: '请选择还款周期', trigger: 'blur'},
          ],
          dk_money: [
            {required: true, message: '请输入贷款金额', trigger: 'blur'},
          ],
          dk_name: [
            {required: true, message: '请输入您的姓名', trigger: 'blur'},
          ],
          dk_phone: [
            {required: true, message: '请输入您的手机号码', trigger: 'blur'},
            { min: 11, max: 11, message: '手机号码必须是11位数字', trigger: 'blur' }
          ],
          dk_code: [
            {required: true, message: '请输入验证码', trigger: 'change'}
          ],
          dk_profession: [
            {required: true, message: '请选择您的职业', trigger: 'change'}
          ],
          dk_salary: [
            {required: true, message: '请选择每月收入', trigger: 'change'}
          ],
          dk_salary_way: [
            {required: true, message: '请选择发薪方式', trigger: 'change'}
          ],
          dk_id_card: [
            {required: true, message: '请输入您的身份证号', trigger: 'blur'},
          ],
        },
      }
    },
    mounted() {
      this.ruleForm.dk_from = this.$route.query.from ? this.$route.query.from : 'gdt_pd'
    },
    created() {
      Indicator.close();
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            sqdk(this.ruleForm).then((data) => {
              MessageBox('提交成功', '申请已经提交成功,后台审核通过之后我们会尽快联系您!');
            })
          } else {
            return false;
          }
        });
      },
      doSendVerify(formName) {
        if (!this.ruleForm.dk_phone) {
          Toast({
            message: '请填写手机号码',
            type: 'error',
            duration: 1 * 1000
          })
        } else {
          sendSms(this.ruleForm.dk_phone).then((data) => {
            Toast({
              message: '短信发送成功,请注意查收',
              type: 'success',
              duration: 1 * 1000
            })
          })
        }
      },
    },
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .el-radio {
    margin-right: 10px;
  }
  .stats_bottom {
    font-size: 12px;
    text-align: center;
    margin: 0px 15px;
    margin-bottom: 20px;
    color: #666666;
  }
  .stats {
    font-size: 16px;
    color: #666666;
    text-align: center;
    margin: 10px;
  }
  .el-form-item {
    margin-bottom: 20px;
  }
  .form {
    margin: 20px;
  }

  .header img {
    width: 100%;
    display: inline-block;
    vertical-align: middle;
  }

  .header {
    width: 100%;
    margin: 0 auto;
    font-size: 0;
  }

  .main {
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
    background-color: #FFFFFF;
    position: relative;
  }

</style>
