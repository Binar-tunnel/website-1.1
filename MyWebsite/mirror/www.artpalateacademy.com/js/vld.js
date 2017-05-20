function cus_trim(e) {
    return e.replace(/^\s+|\s+$/g, "")
}

function isNumber(e) {
    e = e ? e : window.event;
    var t = e.which ? e.which : e.keyCode;
    return t > 31 && (48 > t || t > 57) ? !1 : !0
}

function vacate(e, t) {
    document.getElementById(t).style.display = "none", document.getElementById(t).innerHTML = "", $("#" + e).show()
}

function setProdID(e) {
    var t = document.getElementById("prodidsms");
    null !== t && (document.getElementById("prodidsms").value = e);
    var l = document.getElementById("prodidhl");
    null !== l && (document.getElementById("prodidhl").value = e);
    var m = document.getElementById("prodidmail");
    null !== m && (document.getElementById("prodidmail").value = e), $("#btnsms_" + e).click(function() {
        document.getElementById("frmNameSms").value = "", document.getElementById("frmNumSms").value = "", document.getElementById("frmMsgSms").value = "", document.getElementById("msg_validate_sms").style.display = "none", document.getElementById("msg_validate_sms").innerHTML = "", $("#frmSms").show()
    }), $("#callbk_" + e).click(function() {
        document.getElementById("frmNameCallbk").value = "", document.getElementById("frmNumCallbk").value = "", document.getElementById("msg_validate_callbk").style.display = "none", document.getElementById("msg_validate_callbk").innerHTML = "", $("#frmCallbk").show()
    }), $("#btn_hl_" + e).click(function() {
        document.getElementById("frmNameHl").value = "", document.getElementById("frmEmailHl").value = "", document.getElementById("frmNumHl").value = "", document.getElementById("frmMsgHl").value = "", document.getElementById("msg_validate_hl").style.display = "none", document.getElementById("msg_validate_hl").innerHTML = "", $("#frmHl").show()
    }), $("#btnmail_" + e).click(function() {
        document.getElementById("frmNameMail").value = "", document.getElementById("frmEmailMail").value = "", document.getElementById("frmNumMail").value = "", document.getElementById("frmMsgMail").value = "", document.getElementById("msg_validate_hl").style.display = "none", document.getElementById("msg_validate_hl").innerHTML = "", $("#frmMail").show()
    })
}

function echeck(e) {
    var t = "@",
        l = ".",
        m = e.indexOf(t),
        n = e.length;
    e.indexOf(l);
    return -1 == e.indexOf(t) ? !1 : -1 == e.indexOf(t) || 0 == e.indexOf(t) || e.indexOf(t) == n ? !1 : -1 == e.indexOf(l) || 0 == e.indexOf(l) || e.indexOf(l) == n ? !1 : -1 != e.indexOf(t, m + 1) ? !1 : e.substring(m - 1, m) == l || e.substring(m + 1, m + 2) == l ? !1 : -1 == e.indexOf(l, m + 2) ? !1 : -1 != e.indexOf(" ") ? !1 : !0
}

function validateSms(e) {
    var t = new Array,
        l = 1;
    document.getElementById("msg_validate_sms").innerHTML = "";
    var m = document.getElementById("frmNameSms").value;
    m = cus_trim(m);
    var n = document.getElementById("frmNumSms").value;
    n = cus_trim(n);
    var a = document.getElementById("frmMsgSms").value;
    if (a = cus_trim(a), ("" == m || "Name" == m) && (t[t.length] = "Please enter full name.", l = 0), mobilepattern = /^[0-9 \-]{10,13}$/, "mobile number" == n ? (t[t.length] = "Please enter mobile no.", l = 0) : mobilepattern.test(n) || (t[t.length] = "Please enter valid mobile no.", l = 0), ("" == a || "Message" == a) && (t[t.length] = "Please enter your Message.", l = 0), 0 == l) {
        for (message_box = "<ul>", i = 0; i < t.length; i++) message_box += "<li>", message_box += t[i], message_box += "</li>";
        return message_box += "</ul>", document.getElementById(e).style.display = "block", document.getElementById(e).innerHTML = message_box, !1
    }
    return $.ajax({
        type: "POST",
        url: "get_result.php",
        data: $("#frmSms").serialize(),
        success: function(e) {
            var t = document.getElementById("msg_validate_sms");
            "OK" == e ? window.location.href = sitename : (result = e, t.style.display = "block", t.style.textAlign = "center", t.innerHTML = result, document.getElementById("frmNameSms").value = "", document.getElementById("frmNumSms").value = "", document.getElementById("frmMsgSms").value = "", e = "")
        }
    }), !1
}

function validateCallbk(e) {
    var t = new Array,
        l = 1,
        m = document.getElementById("frmNameCallbk").value;
    m = cus_trim(m);
    var n = document.getElementById("frmNumCallbk").value;
    if (n = cus_trim(n), (m = "name" == m) && (t[t.length] = "Please enter full name.", l = 0), mobilepattern = /^[0-9 \-]{10,13}$/, "Mobile number" == n ? (t[t.length] = "Please enter mobile no.", l = 0) : mobilepattern.test(n) || (t[t.length] = "Please enter valid mobile no.", l = 0), 0 == l) {
        for (message_box = "<ul>", i = 0; i < t.length; i++) message_box += "<li>", message_box += t[i], message_box += "</li>";
        return message_box += "</ul>", document.getElementById(e).style.display = "block", document.getElementById(e).innerHTML = message_box, !1
    }
    return $.ajax({
        type: "POST",
        url: "get_result.php",
        data: $("#frmCallbk").serialize(),
        success: function(t) {
            var l = document.getElementById(e);
            "OK" == t ? window.location.href = sitename : (result = t, l.style.display = "block", l.style.textAlign = "center", l.innerHTML = result, document.getElementById("frmNameCallbk").value = "", document.getElementById("frmNumCallbk").value = "")
        }
    }), !1
}

function validateCmn(e) {
    var t = new Array,
        l = 1,
        m = document.getElementById("frmNameCmn").value;
    m = cus_trim(m);
    var n = document.getElementById("frmEmailCmn").value;
    n = cus_trim(n);
    var a = document.getElementById("frmNumCmn").value;
    a = cus_trim(a);
    var s = document.getElementById("frmMsgCmn").value;
    if (s = cus_trim(s), ("name" == m || "" == m) && (t[t.length] = "Please enter full name.", l = 0), "" == n || "Email" == n ? (t[t.length] = "Please enter Email", l = 0) : echeck(n) || (t[t.length] = "Please enter valid Email.", l = 0), mobilepattern = /^[0-9 \-]{10,13}$/, "Mobile number" == a ? (t[t.length] = "Please enter mobile no.", l = 0) : mobilepattern.test(a) || (t[t.length] = "Please enter valid mobile no.", l = 0), ("" == s || "Message" == s) && (t[t.length] = "Please enter your Message.", l = 0), 0 == l) {
        for (message_box = "<ul>", i = 0; i < t.length; i++) message_box += "<li>", message_box += t[i], message_box += "</li>";
        return message_box += "</ul>", document.getElementById(e).style.display = "block", document.getElementById(e).innerHTML = message_box, !1
    }
    return $.ajax({
        type: "POST",
        url: "get_result.php",
        data: $("#frmCmn").serialize(),
        success: function(t) {
            var l = document.getElementById(e);
            "OK" == t ? window.location.href = sitename : (result = t, l.style.display = "block", l.style.textAlign = "center", l.innerHTML = result, document.getElementById("frmNameCmn").value = "", document.getElementById("frmEmailCmn").value = "", document.getElementById("frmNumCmn").value = "", document.getElementById("frmMsgCmn").value = "")
        }
    }), !1
}

function validateMail(e) {
    var t = new Array,
        l = 1,
        m = document.getElementById("frmNameMail").value;
    m = cus_trim(m);
    var n = document.getElementById("frmEmailMail").value;
    n = cus_trim(n);
    var a = document.getElementById("frmMsgMail").value;
    if (a = cus_trim(a), ("name" == m || "" == m) && (t[t.length] = "Please enter full name.", l = 0), "" == n || "Email" == n ? (t[t.length] = "Please enter Email", l = 0) : echeck(n) || (t[t.length] = "Please enter valid Email.", l = 0), ("" == a || "Message" == a) && (t[t.length] = "Please enter your Message.", l = 0), 0 == l) {
        for (message_box = "<ul>", i = 0; i < t.length; i++) message_box += "<li>", message_box += t[i], message_box += "</li>";
        return message_box += "</ul>", document.getElementById(e).style.display = "block", document.getElementById(e).innerHTML = message_box, !1
    }
    return $.ajax({
        type: "POST",
        url: "get_result.php",
        data: $("#frmMail").serialize(),
        success: function(t) {
            var l = document.getElementById(e);
            "OK" == t ? window.location.href = sitename : (result = t, l.style.display = "block", l.style.textAlign = "center", l.innerHTML = result, document.getElementById("frmNameMail").value = "", document.getElementById("frmEmailMail").value = "", document.getElementById("frmMsgMail").value = "")
        }
    }), !1
}

function validateHl(e) {
    var t = new Array,
        l = 1,
        m = document.getElementById("frmNameHl").value;
    m = cus_trim(m);
    var n = document.getElementById("frmEmailHl").value;
    n = cus_trim(n);
    var a = document.getElementById("frmNumHl").value;
    a = cus_trim(a);
    var s = document.getElementById("frmMsgHl").value;
    if (s = cus_trim(s), ("name" == m || "" == m) && (t[t.length] = "Please enter full name.", l = 0), "" == n || "Email" == n ? (t[t.length] = "Please enter Email", l = 0) : echeck(n) || (t[t.length] = "Please enter valid Email.", l = 0), mobilepattern = /^[0-9 \-]{10,13}$/, "Mobile number" == a ? (t[t.length] = "Please enter mobile no.", l = 0) : mobilepattern.test(a) || (t[t.length] = "Please enter valid mobile no.", l = 0), ("" == s || "Message" == s) && (t[t.length] = "Please enter your Message.", l = 0), 0 == l) {
        for (message_box = "<ul>", i = 0; i < t.length; i++) message_box += "<li>", message_box += t[i], message_box += "</li>";
        return message_box += "</ul>", document.getElementById(e).style.display = "block", document.getElementById(e).innerHTML = message_box, !1
    }
    return $.ajax({
        type: "POST",
        url: "get_result.php",
        data: $("#frmHl").serialize(),
        success: function(t) {
            var l = document.getElementById(e);
            "OK" == t ? window.location.href = sitename : (result = t, l.style.display = "block", l.style.textAlign = "center", l.innerHTML = result, document.getElementById("frmNameHl").value = "", document.getElementById("frmEmailHl").value = "", document.getElementById("frmNumHl").value = "", document.getElementById("frmMsgHl").value = "")
        }
    }), !1
}

function validateSide(e) {
    var t = new Array,
        l = 1,
        m = document.getElementById("frmNameSide").value;
    m = cus_trim(m);
    var n = document.getElementById("frmEmailSide").value;
    n = cus_trim(n);
    var a = document.getElementById("frmNumSide").value;
    a = cus_trim(a);
    var s = document.getElementById("frmMsgSide").value;
    if (s = cus_trim(s), ("name" == m || "" == m) && (t[t.length] = "Please enter full name.", l = 0), "" == n || "Email" == n ? (t[t.length] = "Please enter Email", l = 0) : echeck(n) || (t[t.length] = "Please enter valid Email.", l = 0), mobilepattern = /^[0-9 \-]{10,13}$/, "Mobile number" == a ? (t[t.length] = "Please enter mobile no.", l = 0) : mobilepattern.test(a) || (t[t.length] = "Please enter valid mobile no.", l = 0), ("" == s || "Message" == s) && (t[t.length] = "Please enter your Message.", l = 0), 0 == l) {
        for (message_box = "<ul>", i = 0; i < t.length; i++) message_box += "<li>", message_box += t[i], message_box += "</li>";
        return message_box += "</ul>", document.getElementById(e).style.display = "block", document.getElementById(e).innerHTML = message_box, !1
    }
    return $.ajax({
        type: "POST",
        url: "get_result.php",
        data: $("#frmSide").serialize(),
        success: function(t) {
            var l = document.getElementById(e);
            "OK" == t ? window.location.href = sitename : (result = t, l.style.display = "block", l.style.textAlign = "center", l.innerHTML = result, document.getElementById("frmNameSide").value = "", document.getElementById("frmEmailSide").value = "", document.getElementById("frmNumSide").value = "", document.getElementById("frmMsgSide").value = "")
        }
    }), !1
}

function validateLft(e) {
    var t = new Array,
        l = 1,
        m = document.getElementById("frmNameLft").value;
    m = cus_trim(m);
    var n = document.getElementById("frmEmailLft").value;
    n = cus_trim(n);
    var a = document.getElementById("frmNumLft").value;
    a = cus_trim(a);
    var s = document.getElementById("frmMsgLft").value;
    if (s = cus_trim(s), ("name" == m || "" == m) && (t[t.length] = "Please enter full name.", l = 0), "" == n || "Email" == n ? (t[t.length] = "Please enter Email", l = 0) : echeck(n) || (t[t.length] = "Please enter valid Email.", l = 0), mobilepattern = /^[0-9 \-]{10,13}$/, "Mobile number" == a ? (t[t.length] = "Please enter mobile no.", l = 0) : mobilepattern.test(a) || (t[t.length] = "Please enter valid mobile no.", l = 0), ("" == s || "Message" == s) && (t[t.length] = "Please enter your Message.", l = 0), 0 == l) {
        for (message_box = "<ul>", i = 0; i < t.length; i++) message_box += "<li>", message_box += t[i], message_box += "</li>";
        return message_box += "</ul>", document.getElementById(e).style.display = "block", document.getElementById(e).innerHTML = message_box, !1
    }
    return !0
}

function validateCust(e) {
    var t = new Array,
        l = 1,
        m = document.getElementById("frmNameCust").value;
    m = cus_trim(m);
    var n = document.getElementById("frmEmailCust").value;
    n = cus_trim(n);
    var a = document.getElementById("frmNumCust").value;
    a = cus_trim(a);
    var s = document.getElementById("frmMsgCust").value;
    if (s = cus_trim(s), ("name" == m || "" == m) && (t[t.length] = "Please enter full name.", l = 0), "" == n || "Email" == n ? (t[t.length] = "Please enter Email", l = 0) : echeck(n) || (t[t.length] = "Please enter valid Email.", l = 0), mobilepattern = /^[0-9 \-]{10,13}$/, "Mobile number" == a ? (t[t.length] = "Please enter mobile no.", l = 0) : mobilepattern.test(a) || (t[t.length] = "Please enter valid mobile no.", l = 0), ("" == s || "Message" == s) && (t[t.length] = "Please enter your Message.", l = 0), 0 == l) {
        for (message_box = "<ul>", i = 0; i < t.length; i++) message_box += "<li>", message_box += t[i], message_box += "</li>";
        return message_box += "</ul>", document.getElementById(e).style.display = "block", document.getElementById(e).innerHTML = message_box, !1
    }
    return $.ajax({
        type: "POST",
        url: "/php/form.php",
        data: $("#frmCust").serialize(),
        success: function(t) {
            var l = document.getElementById(e);
            "OK" == t ? window.location.href = sitename : (result = t, l.style.display = "block", l.style.textAlign = "center", l.innerHTML = result, document.getElementById("frmNameCust").value = "", document.getElementById("frmEmailCust").value = "", document.getElementById("frmNumCust").value = "", document.getElementById("comment").value = "")
        }
    }), !1
}
var sitename = "http://" + window.location.hostname + "/thanks.php";
$("#btnsms").click(function() {
    document.getElementById("frmNameSms").value = "", document.getElementById("frmNumSms").value = "", document.getElementById("frmMsgSms").value = "", document.getElementById("prodidsms").value = "", document.getElementById("msg_validate_sms").style.display = "none", document.getElementById("msg_validate_sms").innerHTML = "", $("#frmSms").show()
}), $("#btnmail").click(function() {
    document.getElementById("frmNameMail").value = "", document.getElementById("frmEmailMail").value = "", document.getElementById("frmMsgMail").value = "", document.getElementById("prodidmail").value = "", document.getElementById("msg_validate_mail").style.display = "none", document.getElementById("msg_validate_mail").innerHTML = "", $("#frmMail").show()
}), $("#callbk1,#callbk2,#callbk3").click(function() {
    document.getElementById("frmNameCallbk").value = "", document.getElementById("frmNumCallbk").value = "", document.getElementById("prodidcallbk").value = "", document.getElementById("msg_validate_callbk").style.display = "none", document.getElementById("msg_validate_callbk").innerHTML = "", document.getElementById("frmCallbk").style.display = "block", $("#frmCallbk").show()
}), $("#btncmn,#btn_form_hl").click(function() {
    document.getElementById("frmNameCmn").value = "", document.getElementById("frmEmailCmn").value = "", document.getElementById("frmNumCmn").value = "", document.getElementById("frmMsgCmn").value = "", document.getElementById("prodid").value = "", document.getElementById("msg_validate_cmn").style.display = "none", document.getElementById("msg_validate_cmn").innerHTML = "", $("#frmCmn").show()
}), $("#sidebar").click(function() {
    "block" == document.getElementById("msg_validate_side").style.display && setTimeout(function() {
        document.getElementById("msg_validate_side").style.display = "none", document.getElementById("msg_validate_side").innerHTML = "", document.getElementById("frmNameSide").value = "", document.getElementById("frmEmailSide").value = "", document.getElementById("frmNumSide").value = "", document.getElementById("frmMsgSide").value = ""
    }, 1900)
});