import React from 'react';


export function Wizard() {

    return (
        <div className="card card-custom gutter-b">
            <div className="card-header">
                <div className="card-title">
                    <h3 className="card-label">Wizard 4</h3>
                </div>
            </div>
            <div className="card-body">
                <div
                 class="wizard wizard-4"
                 id="kt_wizard_v4"
                 data-wizard-state="step-first"
            >
                <div className="wizard-nav">
                    <div className="wizard-steps">
                        <a
                            className="wizard-step"
                            data-wizard-type="step"
                            data-wizard-state="current"
                        >
                            <div className="wizard-wrapper">
                                <div className="wizard-number">1</div>
                                <div className="wizard-label">
                                    <div className="wizard-title">Add Account</div>
                                    <div className="wizard-desc">Create Custom Account</div>
                                </div>
                            </div>
                        </a>
                        <a className="wizard-step" data-wizard-type="step">
                            <div className="wizard-wrapper">
                                <div className="wizard-number">2</div>
                                <div className="wizard-label">
                                    <div className="wizard-title">Your Address</div>
                                    <div className="wizard-desc">Setup Your Address</div>
                                </div>
                            </div>
                        </a>
                        <a className="wizard-step" data-wizard-type="step">
                            <div className="wizard-wrapper">
                                <div className="wizard-number">3</div>
                                <div className="wizard-label">
                                    <div className="wizard-title">Make Payment</div>
                                    <div className="wizard-desc">Add Payment Options</div>
                                </div>
                            </div>
                        </a>
                        <a className="wizard-step" data-wizard-type="step">
                            <div className="wizard-wrapper">
                                <div className="wizard-number">4</div>
                                <div className="wizard-label">
                                    <div className="wizard-title">Completed</div>
                                    <div className="wizard-desc">Review and Submit</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}
