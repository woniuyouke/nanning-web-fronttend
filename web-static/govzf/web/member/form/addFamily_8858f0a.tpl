<form class="family-item J_addFamily" id="step3_form_<%= index %>">
  <span class="tit">成员<%= index+1 %></span>
  <a class="delete"><em class="iconfont icon-close_ic"></em>删除</a>
  <p class="form-row">
    <label class="J_row-name">姓名：</label>
    <input type="text" class="m-width" name="name"
           placeholder="请输入姓名">
    <label class="J_row-id_number">身份证号：</label>
    <input
      type="text" class="l-width" name="id_number" placeholder="请输入身份证号">
    <label class="J_row-relation">与申请人关系：</label>
    <input type="text" class="l-width" name="relation" placeholder="请输入与申请人关系">
  </p>
  <p class="form-row">
    <label class="J_row-sex">性别：</label>
    <span class="pretty-radio-wrapper">
      <label for="male_f_<%= index %>_2" class="iconfont">
        <span class="pretty-radio"></span>
        <input type="radio" value="1" id="male_f_<%= index %>_2" name="sex">
        男
      </label>
      <label for="female_f_<%= index %>_1" class="iconfont">
        <span class="pretty-radio"></span>
        <input type="radio" value="2" id="female_f_<%= index %>_1" name="sex">
        女
      </label>
    </span>
    <label class="J_row-household_type">户籍：</label>
    <span class="pretty-radio-wrapper">
      <label for="register_f_<%= index %>_1" class="iconfont">
        <span class="pretty-radio"></span>
        <input type="radio" value="1" id="register_f_<%= index %>_1" name="household_type">
        农业
      </label>
      <label for="register_f_<%= index %>_2" class="iconfont">
        <span class="pretty-radio"></span>
        <input type="radio" value="2" id="register_f_<%= index %>_2" name="household_type">
        非农业
      </label>
    </span>
    <label class="J_row-marital_status">婚姻状况：</label>
    <span class="pretty-radio-wrapper">
      <label for="marital_status_f_<%= index %>_1" class="iconfont">
        <span class="pretty-radio"></span>
        <input type="radio" id="marital_status_f_<%= index %>_1" value="1" name="marital_status">
        已婚
      </label>
      <label for="marital_status_f_<%= index %>_2" class="iconfont">
        <span class="pretty-radio"></span>
        <input type="radio" id="marital_status_f_<%= index %>_2" value="2" name="marital_status">
        未婚
      </label>
      <label for="marital_status_f_<%= index %>_3" class="iconfont">
        <span class="pretty-radio"></span>
        <input type="radio" id="marital_status_f_<%= index %>_3" value="3" name="marital_status">
        离异
      </label>
      <label for="marital_status_f_<%= index %>_4" class="iconfont">
        <span class="pretty-radio"></span>
        <input type="radio" id="marital_status_f_<%= index %>_4" value="4" name="marital_status">
        寡鳏
      </label>
    </span>
  </p>
  <p class="form-row">
    <label class="J_row-birthday">出生年月：</label>
    <input type="text" placeholder="请选择日期" name="birthday" class="m-width form_date">
    <span class="iconfont time-after"></span>
    <label class="J_row-monthly_income ml-20">个人月收入：</label>
    <input type="text" placeholder="请输入个人月收入" name="monthly_income" class="m-width no-right"><span>元</span>
    <label class="J_row-low_income_id_number ml-20">低保证号：</label>
    <input class="l-width" type="text" name="low_income_id_number" placeholder="请输入低保证号">
  </p>
  <p class="form-row">
    <label class="J_row-work_unit">工作单位：</label>
    <input type="text" class="l-width" name="work_unit" placeholder="请输入工作单位名称">
    <label class="J_row-position">职位：</label>
    <input type="text" class="m-width" name="position" placeholder="请输入职位">
  </p>
  <p class="form-row">
    <label class="J_row-is_apply">是否申请保障：</label>
    <span class="pretty-radio-wrapper">
      <label for="is_apply_f_<%= index %>_1" class="iconfont">
        <span class="pretty-radio"></span>
        <input type="radio" value="1" id="is_apply_f_<%= index %>_1" name="is_apply">
        是
      </label>
      <label for="is_apply_f_<%= index %>_2" class="iconfont">
        <span class="pretty-radio"></span>
        <input type="radio" value="2" id="is_apply_f_<%= index %>_2" name="is_apply">
        否
      </label>
    </span>
  </p>
  <p class="form-row-error form-row"><span class="text">请填写完整表单，若如无对应信息，请填写“无”</span></p>
</form>
