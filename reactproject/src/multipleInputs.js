import React from 'react'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import "../src/demo.css"
const MultipleInputs = () => {
    return (
        <div>
            <form id="form_fb" action="">
                <h1 id="heading1_fb">Create your Google Account</h1>
                <img id="img_fb" src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" width="244" height="244" class="j9NuTc TrZEUc"></img>
                <div id="content_fb">
                    <div id="firstlast">
                        <span id="textfield1_fb">
                            <TextField id="outlined-basic" label="First Name" variant="outlined" />
                        </span>
                        <span id="textfield3_fb">
                            <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                        </span>
                    </div>
                    <div id="textfield1_fb">
                        <TextField id="outlined-basic" label="Your email address" variant="outlined" />
                        <div>You'll need to confirm that this email belongs to you.</div>
                    </div>
                    <div>
                        <Button id="button1_fb" variant="contained" color="primary">
                            Create a new Gmail address instead
                        </Button>
                    </div>
                    <div id="textfield1_fb">
                        <span>
                            <TextField id="outlined-basic" label="Password" variant="outlined" />
                        </span>
                        <span id="textfield2_fb">
                            <TextField id="outlined-basic" label="Confirm" variant="outlined" />
                        </span>
                        <div>
                            Use 8 or more characters with a mix of letters, numbers & symbols
                        </div>
                    </div>
                    <div id="textfield1_fb">
                        <Checkbox
                            defaultChecked
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                        <span>Show password</span>
                    </div>
                    <div>
                        <Button id="button2_fb" variant="contained" color="primary">
                            Sign in instead
                        </Button>
                        <Button id="button3_fb" variant="contained" color="primary">
                            Next
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default MultipleInputs